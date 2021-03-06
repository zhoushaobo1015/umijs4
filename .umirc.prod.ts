const { UMI_ENV } = process.env;

export default {
    define: {
        DOMAIN: "https://xxx.xxx.com",
        TYPE: "prod"
    },
    outputPath: UMI_ENV === 'prod' ? 'prod' : 'dist', // 打包到不同文件夹
};