export default class Form {
    constructor(selector) {
        this.element = $(selector);
        this.data = {
            action: "",
            method: "",
            params: {}
        }
    }

    getData() {
        this.data.action = this.element.attr("action");
        this.data.method = this.element.attr("method");
        this.data.params = this.getDataFromInputs();

        return this.data;
    }

    getDataFromInputs() {
        const inputs = this.element.find("input, select");
        const data = {}

        inputs.each((idx, elem) => {
            const name = $(elem).attr("name");
            const val = $(elem).val();

            if(name !== "authorities") {
                data[name] = val;
            } else {
                data[name] = [];
                val.forEach(elem => {
                    data[name].push({authority: elem})
                })
            }
        });

        return data;
    }

}