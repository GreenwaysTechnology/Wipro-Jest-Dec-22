//The output of one callback will be input to another callback

const getUser = (resolve, reject) => {
    let user = {
        id: 1,
        name: 'admin'
    }
    if (user) {
        setTimeout(resolve, 1000, user)
    } else {
        setTimeout(reject, 1000, { error: 'User not found' })
    }
}
const login = (user, resolve, reject) => {
    if (user.name === 'admin') {
        setTimeout(resolve, 1000, 'Login success')
    } else {
        setTimeout(reject, 1000, 'Login Failed')
    }
}
const dashboard = (status, resolve, reject) => {
    if (status === 'Login success') {
        setTimeout(resolve, 1000, 'Welcome to Admin')
    } else {
        setTimeout(reject, 1000, 'Welcome to Guest')
    }
}

function main() {
    //callback compostion
    getUser(user => {
        login(user,
            status => {
                dashboard(status, adminPage => {
                    console.log(adminPage)
                }, err => {
                    console.log(err)
                })
            }, err => {
                console.log(err)
            })
    }, err => {
        console.log(err)
    })

}
main()