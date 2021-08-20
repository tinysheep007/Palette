// Small devices (landscape phones, less than 768px)
// Medium devices (tablets, less than 992px)
// Large devices (desktops, less than 1200px)

export default {
    up() {

    },
    down(size) {
        const sizes = {
            xs: "575.98px",
            sm: "767.98px",
            md: "991.98px",
            lg: "1199.98px",
            xl: "1600px"
        }
        return `@media (max-width: ${sizes[size]})`
    }
}