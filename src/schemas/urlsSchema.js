import joi from "joi";

export const urlsSchema = joi.object({
    url: joi.string().uri().required(),
});
