import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor () {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async creatAccount({email, password, name}) {
        try {
        const userAccout = await this.account.create(ID.unique(), email, password, name)
        if (userAccout) {
            return this.login({email, password});
        }else{
            return userAccout;
         }
            } catch (error) {
            throw error;
            }
        }
        
        async login({email, password}) {
            try {
            return await this.account.createEmailSession(email, password);
            } catch (error) {
                throw error;
            }
            
        }

        async getCurrentUser() {
            try {
            return await this.account.get();
            } catch (error) {
                console.log("Appwrite service :: getCurrentUser :: error", error)
            }
            
            return null;
        }
        
        async logout (){
            try {
                await this.account.deleteSessions();
            } catch (error) {
                console.log("Appwrite service :: getCurrentUser :: error", error)
            }
        }
    }
        
const authService = new AuthService();

export default authService