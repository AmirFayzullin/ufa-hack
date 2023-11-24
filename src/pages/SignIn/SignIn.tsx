import * as React from "react";
import {AuthInput} from "../../components/ui/AuthInput/AuthInput.styled";
import {Wrapper} from "../../components/ui/AuthPage/Wrapper.styled";
import {InputsSet} from "../../components/ui/AuthPage/InputsSet.styled";
import {Title} from "../../components/ui/AuthPage/Title.styled";
import {AuthForm} from "../../components/ui/AuthPage/AuthForm.styled";
import {Link} from "react-router-dom";
import {SubmitWrapper} from "../../components/ui/AuthPage/SubmitWrapper.styled";
import {withStore} from "../../HOCs/withStore";
import {observer} from "mobx-react";
import done from '../../assets/done.svg';
import {IRootStore} from "../../store/RootStore.interface";
import {FormEvent, FormEventHandler, SyntheticEvent} from "react";
import {useValidation} from "../../hooks/useValidation/useValidation";
import {
    createMaxLengthValidator,
    createMinLengthValidator, validateEmailAddress,
    validateNotEmptyString, validatePassword, validateRequired
} from "../../hooks/useValidation/validatorsLib";
import {ChangeEvent} from "react";
import {ChangeEventHandler} from "react";
import {InputError} from "../../components/ui/AuthInput/InputError.styled";
import {InputContainer} from "../../components/ui/AuthInput/InputContainer.styled";
import errorIcon from "../../assets/error.svg";
import {SubmitButton} from "../../components/ui/SubmitButton/SubmitButton.styled";

type Props = {
    store: IRootStore
}

export const SignIn = withStore(observer(({store}: Props) => {

    const { authStore, tooltipServiceStore } = store;

    const [values, validity, handleChange] = useValidation(
        {
            email: '',
            password: '',
        },
        {
            email: [
                validateNotEmptyString,
                validateEmailAddress,
                createMinLengthValidator(5),
                createMaxLengthValidator(40)
            ],
            password: [
                validateRequired,
                validateNotEmptyString,
                createMinLengthValidator(8),
                validatePassword,
                createMaxLengthValidator(40)
            ]
        }
    );


    const handleSubmit: FormEventHandler<HTMLFormElement> = (evt: FormEvent) => {
        evt.preventDefault();

        const isFormValid = Object.values(validity).some(v => !v.isValid);

        if (isFormValid) {
            tooltipServiceStore.open({
                content: 'Validation failed',
                icon: errorIcon
            });

            return;
        }

        const { email, password } = values;

        authStore.login({ email, password })
    };

    return (
        <Wrapper>
            <Title>
                Login
            </Title>

            <AuthForm onSubmit={handleSubmit}>
                <InputsSet>
                    <InputContainer>
                        <AuthInput placeholder="Email"
                                   value={values.email}
                                   onChange={
                                       ((evt: ChangeEvent<HTMLInputElement>) => handleChange({
                                           name: 'email',
                                           value: evt.target.value
                                       })) as ChangeEventHandler
                                   }
                        />
                        <InputError>{validity.email.messages[0]}</InputError>
                    </InputContainer>
                    <InputContainer>
                        <AuthInput placeholder="password"
                                   type='password'
                                   value={values.password}
                                   onChange={
                                       ((evt: ChangeEvent<HTMLInputElement>) => handleChange({
                                           name: 'password',
                                           value: evt.target.value
                                       })) as ChangeEventHandler
                                   }
                        />
                        <InputError>{validity.password.messages[0]}</InputError>
                    </InputContainer>
                </InputsSet>

                <SubmitWrapper>
                    <SubmitButton>
                        Login
                    </SubmitButton>
                    <Link to='/sign-up' style={{textAlign: 'center'}}>Go to register</Link>
                </SubmitWrapper>
            </AuthForm>
        </Wrapper>
    )
}))