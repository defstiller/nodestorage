import {useState} from "react";

function useHandleInputChange() {
	const [input, setInput] = useState("");

	function objectInput(event) {
		const value = event.target.value;
		const name = event.target.name;
		setInput({
			...input,
			[name]:value
		});

	}
	return { objectInput, input, setInput};
}

export default useHandleInputChange;