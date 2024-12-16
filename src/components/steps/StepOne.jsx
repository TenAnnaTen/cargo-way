const StepOne = ({ formData, onChange, onNext }) => {
    return (
        <div className='center form'>
            <h1 className='form__title'>Регистрация</h1>
            <div className='form__radio'>
                <label className='form__radio-label'>
                    <input className='form__radio-input'
                        type="radio"
                        name="userType"
                        value="individual"
                        checked={formData.userType === "individual"}
                        onChange={onChange}
                    />
                    Физическое лицо
                </label>
                <label className='form__radio-label'>
                    <input className='form__radio-input'
                        type="radio"
                        name="userType"
                        value="company"
                        checked={formData.userType === "company"}
                        onChange={onChange}
                    />
                    Юридическое лицо
                </label>
            </div>
            <div className='form__simple'>
                <input className='form__simple-input'
                    type="text"
                    name="login"
                    placeholder="Логин"
                    value={formData.login}
                    onChange={onChange}
                />
                <input className='form__simple-input'
                    type="email"
                    name="email"
                    placeholder="Почта"
                    value={formData.email}
                    onChange={onChange}
                />
                <input className='form__simple-input'
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    value={formData.password}
                    onChange={onChange}
                />
            </div>
            <label className='form__label'>
                <input className='form__input'
                    type="checkbox"
                    name="agreement"
                    checked={formData.agreement}
                    onChange={onChange}
                />
                Соглашаюсь с условиями обработки данных
            </label>
            <button className='button form__button' onClick={onNext}>Далее</button>
            <p className="form__transition">Уже зарегистрированы? <a link='#'>Войти</a></p>
        </div>
    )
};

export default StepOne;