export class ApiResponse<T> {

    success: boolean;
    data: T;
    message: string;
    
    private constructor(success: boolean, data: T, message: string){
        this.success = success;
        this.data = data;
        this.message = message;
    }

    static successResponse<T>(data: T, message: string = 'Request successful'): ApiResponse<T> {
        return new ApiResponse<T>(true, data, message);
    }

    static errorResponse<T>(message: string, data: T = null): ApiResponse<T> {
        return new ApiResponse<T>(false, data, message);
    }
}