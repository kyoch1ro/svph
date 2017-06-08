export interface IOptionDTO {
    option_id : number;
    question_id: number;
    option_type: string;
    option_caption: string;
    option_isactive: number;
    option_isdeleted: number;
    created_at: string;
    updated_at: string;
}




export interface IOptionBL {
    // static getById(): IOptionDTO;

}
