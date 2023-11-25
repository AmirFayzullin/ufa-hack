import {BaseResponseDto} from "./BaseResponse.dto";
import {ITag} from "../../models/Tag.model";

export interface GetTagsResponseDto extends BaseResponseDto {
    tags: ITag[]
}