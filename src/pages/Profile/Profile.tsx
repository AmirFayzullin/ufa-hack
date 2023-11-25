import * as React from "react";
import {Section} from "../../components/ui/Section/Section";
import {withStore} from "../../HOCs/withStore";
import {observer} from "mobx-react";
import {IRootStore} from "../../store/RootStore.interface";
import {Property, Wrapper} from "./Profile.styled";

type Props = {
    store: IRootStore
}

export const Profile = withStore(observer(({store}: Props) => {
    return (
        <Section>
            <Wrapper>
                <Property>
                    Email: {store.authStore.user?.email}
                </Property>
                <Property>
                    Name: {store.authStore.user?.name}
                </Property>
            </Wrapper>
        </Section>
    )
}))