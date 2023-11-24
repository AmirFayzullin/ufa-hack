import * as React from "react";
import {AuthInput} from "../../components/ui/AuthInput/AuthInput.styled";
import {Wrapper} from "../../components/ui/AuthPage/Wrapper.styled";
import {InputsSet} from "../../components/ui/AuthPage/InputsSet.styled";
import {Title} from "../../components/ui/AuthPage/Title.styled";
import {AuthForm} from "../../components/ui/AuthPage/AuthForm.styled";
import {Link} from "react-router-dom";
import {SubmitWrapper} from "../../components/ui/AuthPage/SubmitWrapper.styled";
import {useValidation} from "../../hooks/useValidation/useValidation";
import {
    createMaxLengthValidator,
    createMinLengthValidator,
    validateEmailAddress,
    validateNotEmptyString, validatePassword, validateRequired
} from "../../hooks/useValidation/validatorsLib";
import {ChangeEvent, ChangeEventHandler, FormEvent} from "react";
import {InputContainer} from "../../components/ui/AuthInput/InputContainer.styled";
import {InputError} from "../../components/ui/AuthInput/InputError.styled";
import {withStore} from "../../HOCs/withStore";
import {observer} from "mobx-react";
import {IRootStore} from "../../store/RootStore.interface";
import errorIcon from '../../assets/error.svg'
import {SubmitButton} from "../../components/ui/SubmitButton/SubmitButton.styled";

type Props = {
    store: IRootStore
}

export const SignUp = withStore(observer(({store}: Props) => {
    const {tooltipServiceStore, authStore} = store;

    const [values, validity, handleChange] = useValidation(
        {
            login: '',
            email: '',
            password: '',
            repeatedPassword: ''
        },
        {
            login: [
                validateNotEmptyString,
                createMinLengthValidator(2),
                createMaxLengthValidator(40)
            ],
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
            ],
            repeatedPassword: [
                validateRequired,
                validateNotEmptyString,
                createMinLengthValidator(8),
                createMaxLengthValidator(40)
            ]
        }
    );

    const handleSubmit = (evt: FormEvent) => {
        evt.preventDefault();

        const isFormValid = Object.values(validity).some(v => !v.isValid);

        if (values.password !== values.repeatedPassword) {
            tooltipServiceStore.open({
                content: 'Passwords doesn\'t match',
                icon: errorIcon
            });

            return;

        } else if (isFormValid) {
            tooltipServiceStore.open({
                content: 'Validation failed',
                icon: errorIcon
            });

            return;
        }

        const { email, password, login } = values;

        authStore.register({
            email, password, login
        })
    };

    return (
        <Wrapper>
            <Title>
                Register
            </Title>

            <AuthForm onSubmit={handleSubmit}>
                <InputsSet>
                    <InputContainer>
                        <AuthInput placeholder="Login"
                                   value={values.login}
                                   onChange={
                                       ((evt: ChangeEvent<HTMLInputElement>) => handleChange({
                                           name: 'login',
                                           value: evt.target.value
                                       })) as ChangeEventHandler
                                   }
                        />
                        <InputError>{validity.login.messages[0]}</InputError>
                    </InputContainer>

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
                        <AuthInput placeholder="Password"
                                   value={values.password}
                                   type='password'
                                   onChange={
                                       ((evt: ChangeEvent<HTMLInputElement>) => handleChange({
                                           name: 'password',
                                           value: evt.target.value
                                       })) as ChangeEventHandler
                                   }
                        />
                        <InputError>{validity.password.messages[0]}</InputError>
                    </InputContainer>

                    <InputContainer>
                        <AuthInput placeholder="Retype password"
                                   value={values.repeatedPassword}
                                   type='password'
                                   onChange={
                                       ((evt: ChangeEvent<HTMLInputElement>) => handleChange({
                                           name: 'repeatedPassword',
                                           value: evt.target.value
                                       })) as ChangeEventHandler
                                   }
                        />
                        <InputError>{validity.repeatedPassword.messages[0]}</InputError>
                    </InputContainer>
                </InputsSet>

                <SubmitWrapper>
                    <SubmitButton>
                        Register
                    </SubmitButton>
                    <Link to='/sign-in' style={{textAlign: 'center'}}>Go to login</Link>
                </SubmitWrapper>
            </AuthForm>
        </Wrapper>
    )
}));