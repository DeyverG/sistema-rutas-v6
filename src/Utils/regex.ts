export const regexPassword = {
    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
    message: "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una minúscula y un número"
}