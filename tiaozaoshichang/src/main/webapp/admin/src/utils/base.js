const base = {
    get() {
        return {
            url : "http://localhost:8080/tiaozaoshichang/",
            name: "tiaozaoshichang",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/tiaozaoshichang/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "跳蚤市场"
        } 
    }
}
export default base
