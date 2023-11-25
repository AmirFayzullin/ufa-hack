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
import {createRef, FormEvent, FormEventHandler, SyntheticEvent} from "react";
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

    const { authStore } = store;

    const emailInputRef = createRef<HTMLInputElement>();
    const passwordInputRef = createRef<HTMLInputElement>();

    const handleSubmit: FormEventHandler<HTMLFormElement> = (evt: FormEvent) => {
        evt.preventDefault();

        const email = emailInputRef.current?.value || "";
        const password = passwordInputRef.current?.value || "";

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
                                   ref={emailInputRef}
                        />
                    </InputContainer>
                    <InputContainer>
                        <AuthInput placeholder="password"
                                   type='password'
                                   ref={passwordInputRef}
                        />
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