import { useState } from 'react';


const useForm = (initialState) => {
    const [form, setForm] = useState(initialState);

    const onChange = (event) => {
        const { name, value } = event.target; //desentruturação
        setForm({ ...form, [name]: value }); //value do input referente ao name
    }

    const cleanFields = () => {
        setForm(initialState);
    };

    return { form, onChange, cleanFields };
};

export default useForm;