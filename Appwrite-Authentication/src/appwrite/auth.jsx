import { Client, Account, ID } from "appwrite";
import conf from "../envImport/conf"

class AuthService{
    client = new Client()
    account

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async creatAccount(email, password, name){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
            return this.Login({email, password})
            }else null
        } catch (error) {
            throw(error)
        }

    }

    async Login(email, password){
        try {
        return this.account.createSession(email, password)
        } catch (error) {
            throw(error)
        }
    }

    async getCurrentUser(){
        try {
        return await this.account.get()
        } catch (error) {
            throw(error)
        }
        return null
    }

    async Logout(){
        try {
        await this.account.deleteSession()
        } catch (error) {
            throw(error)
        }
    }

}

const authService = new AuthService

export default authService