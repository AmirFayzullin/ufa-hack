import {withStore} from "../../HOCs/withStore";
import {observer} from "mobx-react";
import {IRootStore} from "../../store/RootStore.interface";
import * as React from "react";
import {Wrapper} from "../ui/Tooltip/Wrapper.styled";
import {ContentWrapper} from "../ui/Tooltip/ContentContainer.styled";
import {Icon} from "../ui/Tooltip/Icon.styled";
import {Content} from "../ui/Tooltip/Content.styled";
import {SyntheticEvent} from "react";

type Props = {
    store: IRootStore
}

export const Tooltip = withStore(observer(({store}:Props) => {

    const {tooltipServiceStore} = store;

    const handleClose = (evt: SyntheticEvent) => {
        if (evt.target !== evt.currentTarget) return;

        tooltipServiceStore.close();
    };


    return (
        <Wrapper isOpen={tooltipServiceStore.isOpen} onClick={handleClose}>
            <ContentWrapper>
                <Icon src={tooltipServiceStore.icon}/>
                <Content>
                    {tooltipServiceStore.content}
                </Content>
            </ContentWrapper>
        </Wrapper>
    )
}));