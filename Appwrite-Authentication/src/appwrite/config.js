import { Client, ID, Databases, Storage, Query, ID } from "appwrite";
import conf from "../envImport/conf"

export class Service{
    client = new Client()
    databases
    bucket

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async creatPost({ title, slug, Content, featuredImage, status, userId}){
        try {
        await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                Content,
                featuredImage,
                status,
                userId
            }
        )
        } catch (error) {
            throw(error)
        }
    }

    async updatePost( slug,{title, Content, featuredImage, status}){
        try {
        await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                Content,
                featuredImage,
                status
            }
        )
        } catch (error) {
            throw(error)
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            throw(error)
            return false
        }
    }

    async getPost(slug){
        try {
             return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            throw(error)
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
        return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            queries
        )
        } catch (error) {
            throw(error)
        }
    }

    async uploadFile(file){
        try {
            await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log(error)
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log(error)
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}

const service = new Service()

export default service