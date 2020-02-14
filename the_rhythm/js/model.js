class Model {
    constructor() {
        this.buttons = {};
    }

    init(view, controller) {
        this.view = view;
        this.controller = controller;
    }
}



// function createProgrammer(name) {
//     const programmer = {name}
//     return {
//         ...programmer,
//         ...canCode(programmer)
//     }
// }
//
// function canCode({ name }) {
//     return {
//         code: () => console.log(`${name} is coding...`)
//     }
// }
//
// function canAngular({ name }) {
//     return {
//         angular: () => console.log(`${name} is creating Angular app...`)
//     }
// }
//
// function canNodejs({ name }) {
//     return{
//         nodejs: () => console.log(`${name} is programming on Node SJ...`)
//     }
// }
//
// function canReactAndVue({name}) {
//     return {
//         react: () => console.log(`${name} is creating React app...`),
//         vue: () => console.log(`${name} is creating Vue app...`),
//     }
// }
//
// function createFrontend(name) {
//     const programmer = createProgrammer(name)
//
//     return {
//         ...programmer,
//         ...canAngular(programmer),
//         ...canReactAndVue(programmer)
//     }
// }
//
// function createBackend(name) {
//     const programmer = createProgrammer(name)
//
//     return {
//         ...programmer,
//         ...canNodejs(programmer)
//     }
// }
//
// function createFullstack(name) {
//     const programmer = createProgrammer(name)
//
//     return {
//         ...programmer,
//         ...canNodejs(programmer),
//         ...canAngular(programmer)
//     }
// }
//
// const programmer = createProgrammer('Oleg')
// programmer.code()
//
// const frontend = createFrontend('Frontend')
// frontend.code()
// frontend.angular()
// frontend.react()
// frontend.vue()
//
// const backend = createBackend('Max')
// backend.code()
// backend.nodejs()
//
// const fullstack = createFullstack('Helen')
// fullstack.code()
// fullstack.nodejs()
// fullstack.angular()
//
// // class Programmer {
// //     constructor(name) {
// //         this.name = name
// //     }
// //
// //     code(){
// //         console.log(`${this.name} is coding...`)
// //     }
// // }
// //
// // class Frontend extends Programmer {
// //     angular() {
// //         console.log(`${this.name} is creating Angular app...`)
// //     }
// // }
// //
// // class Backend extends Programmer{
// //     nodejs() {
// //         console.log(`${this.name} is programming on Node SJ...`)
// //     }
// // }
// //
// // class Fullstack extends Frontend{
// //     nodejs() {
// //         console.log(`${this.name} is programming on Node SJ...`)
// //     }
// // }
// //
// // const programmer = new Programmer('Programmer')
// // programmer.code()
// //
// // const frontend = new Frontend('Frontend');
// // frontend.code()
// // frontend.angular()
// //
// // const backend  = new Backend('Maxim');
// // backend.code()
// // backend.nodejs()