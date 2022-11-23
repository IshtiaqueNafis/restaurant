import * as yup from "yup";

export const RestaurantSchema = yup.object().shape({
    restaurantName: yup.string().required(),
    description: yup.string().required(),
    phone: yup.number().min(10).required(),
    tags: yup.string().required(),
    rating: yup.string().required(),

})

export const RestaurantDefaultValue = {
    restaurantName: "",
    description: "",
    phone: "",
    tags: "",
    rating: "",



}
export const options = [
    {value: 'Chinese', label: 'Chinese'},
    {value: 'Indian', label: 'Indian'},
    {value: 'Japanese', label: 'Japanese'},
    {value: 'Canadian', label: 'Canadian'},
];
