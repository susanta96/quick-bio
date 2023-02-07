
const Validator = {

    /**
     * @purpose: to capitalize an entire string
     * @author: Susanta Chankraborty
     * @params: string: <String>
     * @return: <String>
     */
    toCapitalize(string: string) {
        return string.split(" ").reduce((init, current) => init + " " + current.charAt(0).toUpperCase() + current.slice(1), "");
    },

};

export default Validator;