import {useState} from "react";

type FormDataState = {
    [inputName: string]: any
}

export type FieldValidity = {
    isValid: boolean,
    messages: string[]
}

type FormDataValidityState = {
    [inputName: string]: FieldValidity
}


export type Validator = (value: any) => FieldValidity

type ValidatorsConfig = {
    [inputName: string]: Validator[]
}


function createInitialFormDataValidityState(state: FormDataState): FormDataValidityState {
    return Object.keys(state).reduce((prev, curr) => ({
        ...prev,
        [curr]: {
            isValid: false,
            messages: []
        }
    }), {})
}

type changeHandlerParams = {
    name: string,
    value: any
}

type useValidationReturn = [FormDataState, FormDataValidityState, (params: changeHandlerParams) => void, (newFormData?: FormDataState) => void]

export function useValidation(initialState: FormDataState, validators: ValidatorsConfig): useValidationReturn  {
    const [formData, setFormData] = useState<FormDataState>(initialState);
    const [formDataValidityState, setFormDataValidityState] = useState<FormDataState>(() => createInitialFormDataValidityState(initialState))

    const validate = (inputName: string, value: any): FieldValidity => {
        let isValid = true;

        const messages: string[] = validators[inputName]
            .map(validate => {
                const validityState: FieldValidity = validate(value);

                isValid = isValid && validityState.isValid;

                return validityState.messages
            })
            .flat();

        return {
            isValid,
            messages
        }
    };

    const handleChange = ({name, value}: changeHandlerParams) => {
        if (!name) throw new Error('Input validation using useValidation hook requires "name" attribute for <input>');

        const fieldValidity = validate(name, value);

        setFormData({
            ...formData,
            [name]: value
        });

        setFormDataValidityState({
            ...formDataValidityState,
            [name]: fieldValidity
        });
    };

    const reset = (newFormData?: FormDataState) => {
        const isFormDataProvided = !!newFormData;

        const formData = isFormDataProvided ? newFormData : initialState;

        let validityState = {};

        if (isFormDataProvided) {
            validityState = Object.entries(formData).map(([inputName, value]) => validate(inputName, value));
        } else {
            validityState = createInitialFormDataValidityState(formData);
        }

        setFormData(formData);
        setFormDataValidityState(validityState);
    };

    return [formData, formDataValidityState, handleChange, reset]
}

