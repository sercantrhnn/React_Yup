import React from 'react'
import { useFormik } from 'formik';
import { basicSchema } from '../schemas';


const onSubmit = async(values, actions)=>{
    // console.log(values);
    // console.log(actions);

    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      actions.resetForm();
}

function GeneralForm() {

    const {values,handleChange,errors, handleSubmit} =useFormik({
        initialValues: {
            email: '',
            age: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema:basicSchema,
        onSubmit
    })

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Email </label>
            <input type='email'
            value={values.email}
            id='email'
            placeholder='Mail giriniz'
            onChange={handleChange}
            className={errors.email ? 'input-error' : ''}
            />
            </div>
            {errors.email && <p className="error">{errors.email}</p>}
        <div>
            <label>Yaş</label>
            <input type='number'
            value={values.age}
            id='age'
            placeholder='Yaşınızı giriniz'
            onChange={handleChange}
            className={errors.age ? 'input-error' : ''}
            />
            {errors.age && <p className="error">{errors.age}</p>}
            </div>
            <div>
            <label>Şifre</label>
            <input type='password'
            value={values.password}
            id='password'
            placeholder='Şifre giriniz'
            onChange={handleChange}
            className={errors.password ? 'input-error' : ''}
            />
            </div>
            {errors.password && <p className="error">{errors.password}</p>}
            <div>
            <label>Tekrar Şifre</label>
            <input type='password'
            value={values.confirmPassword}
            id='confirmPassword'
            placeholder='Şifreyi tekrar giriniz'
            onChange={handleChange}
            className={errors.confirmPassword ? 'input-error' : ''}
            />
            </div>
            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
            <button type='submit'>KAYDET</button>
    </form>
  )
}

export default GeneralForm