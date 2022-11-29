//The output of one callback will be input to another callback

const getUser = () => {
    let user = {
        id: 1,
        name: 'admin'
    }
    return new Promise((resolve, reject) => {
        if (user) {
            setTimeout(resolve, 1000, user)
        } else {
            setTimeout(reject, 1000, { error: 'User not found' })
        }
    })
}


const login = user => {
    return new Promise((resolve, reject) => {
        if (user.name === 'admin') {
            setTimeout(resolve, 1000, 'Login success')
        } else {
            setTimeout(reject, 1000, 'Login Failed')
        }
    })
}
const dashboard = status => {
    return new Promise((resolve, reject) => {
        if (status === 'Login success') {
            setTimeout(resolve, 1000, 'Welcome to Admin')
        } else {
            setTimeout(reject, 1000, 'Welcome to Guest')
        }
    })
}

async function main() {
    //callback compostion
    // getUser(user => {
    //     login(user,
    //         status => {
    //             dashboard(status, adminPage => {
    //                 console.log(adminPage)
    //             }, err => {
    //                 console.log(err)
    //             })
    //         }, err => {
    //             console.log(err)
    //         })
    // }, err => {
    //     console.log(err)
    // })

    // getUser()
    //     .then(user => {
    //         return login(user)
    //     }).then(status => {
    //         return dashboard(status)
    //     })
    //     .then(page => {
    //         console.log(page)
    //     }).catch(err => console.log(err))

    try {
        const user = await getUser()
        const status = await login(user)
        const page = await dashboard(status)
        console.log(user, status, page)
    }
    catch (err) {
        console.log(err)
    }
}
main()