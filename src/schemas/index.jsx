import *as yup from 'yup';
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object({
    email: yup.string()
    .email('Geçerli mail giriniz')
    .required('Mail girmek zorunludur'),

    age: yup.number()
    .integer('Tam sayı giriniz')
    .positive('Pozitif değer giriniz')
    .required('Yaşınızı giriniz.'),

    password: yup.string()
    .min(5,'Minimum 5 karakter giriniz')
    .matches(passwordRules,{
        message: 'Lütfen en az 1 büyük harf 1 küçük harf ve 1 sayı giriniz',
    }).required('Şifre girmek zorunlu.'),

    confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Şifreler eşleşmiyor')
    .required('Tekrar şifre girmek zorunludur'),
})