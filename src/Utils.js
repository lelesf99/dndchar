import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth();

export async function signOutBtn() {
    signOut(auth).catch((error) => {
        // An error happened.
        console.error(error);
    });
}

// Loga o usuário e retorna uma mensagem de falha em caso de falha
export async function login(email, password) {
    let errorCode;
    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            errorCode = error.code;
        });
    console.log(errorCode);
    switch (errorCode) {
        case "auth/invalid-email":
            return {
                errorMessage: "Email inválido!",
                errorClass: "fail"
            };

        case "auth/user-disabled":
            return {
                errorMessage: "Usuário desabilitado",
                errorClass: "fail"
            }

        case "auth/user-not-found":
            return {
                errorMessage: "Email não registrado!",
                errorClass: "fail"
            }

        case "auth/wrong-password":
            return {
                errorMessage: "Senha incorreta!",
                errorClass: "fail"
            }

        default:
            return {
                errorMessage: "",
                errorClass: ""
            }
    }
}

export let mouseMov = [0, 0];
export let mousePos = [0, 0];

window.addEventListener('mousemove', (e) => {
    mouseMov = [e.movementX, e.movementY];
    mousePos = [e.clientX, e.clientY];
});

document.querySelector('.App').addEventListener('touchstart', process_touchstart, false);
document.querySelector('.App').addEventListener('touchmove', process_touchmove, false);

function process_touchstart(event) {
    mousePos = [event.touches[0].clientX, event.touches[0].clientY];
}
// touchmove handler
function process_touchmove(event) {
    mousePos = [event.touches[0].clientX, event.touches[0].clientY];
}