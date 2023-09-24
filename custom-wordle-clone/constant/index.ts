// modal styles 
export const STYLES = {
  modalOpenStyles: "d-block bg-dark position-absolute",
  modalCloseStyles: "d-none"
}

// jwt secret
export const JWT_SECRET_TOKEN = process.env.JWT_SECRET || "itssecretdonttellanyoneorsomethingbadwillnothappen";

// cookie name to be set on browser
export const AUTH_COOKIE_NAME = "customUser";