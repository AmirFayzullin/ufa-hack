import {FieldValidity} from "./useValidation";

export function validateEmailAddress(value: string): FieldValidity {
    const messages = [];

    const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const isValid = !(value === '' || !emailReg.test(value));


    if (!isValid) messages.push('Incorrect email format');

    return { isValid, messages }
}


export function createMinLengthValidator(minLength: number): (value: string) => FieldValidity {
    return function(value: string): FieldValidity {
        const messages = [];

        const isValid = value.length >= minLength;

        if (!isValid) messages.push(`Min symbols count - ${minLength}`);

        return { isValid, messages }
    }
}

export function createMaxLengthValidator(maxLength: number): (value: string) => FieldValidity {
    return function(value: string): FieldValidity {
        const messages = [];

        const isValid = value.length <= maxLength;

        if (!isValid) messages.push(`Max symbols count - ${maxLength}`);

        return { isValid, messages }
    }
}

export function validateNotEmptyString(value: string): FieldValidity {
    const messages = [];

    const isValid = value.trim().length > 0;

    if (!isValid) messages.push('Field is required and should\'t consist only of spaces');

    return { isValid, messages }
}

export function validateRequired(value: any): FieldValidity {
    const messages = [];

    const isValid = !!value;

    if (!isValid) messages.push('Field is required');

    return { isValid, messages }
}

export function validatePassword(value: string): FieldValidity {
    const messages = [];

    const capitalLetter = /[A-Z]+/;
    const smallLetter = /[a-z]+/;
    const number = /[0-9]+/;
    const specialSymbol = /[\$\@!&]+/;

    if (!capitalLetter.test(value)) messages.push("Password should have at least one capital letter(A-Z)");
    if (!smallLetter.test(value)) messages.push("Password should have at least one small letter(a-z)");
    if (!number.test(value)) messages.push("Password should have at least one number(0-9)");
    if (!specialSymbol.test(value)) messages.push("Password should have at least one special symbol($, @, !, &)");


    return {
        isValid: messages.length === 0,
        messages
    }
}