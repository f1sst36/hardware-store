document.addEventListener("DOMContentLoaded", () => {
    const COUNTER_NODES = document.querySelectorAll("div[data-textfield-type='counter']");
    if (!COUNTER_NODES) return;

    const DEFINITION_ATTRIBUTE = "data-definition";
    const DEFINITION_VALUES = {
        minus: "minus",
        plus: "plus",
        value: "value"
    };

    const setBehaviorOnCounter = (minusButtonNode, plusButtonNode, inputNode) => {
        const disableButtonsIfNeeded = () => {
            minusButtonNode.disabled = inputNode.value === inputNode.min;
            plusButtonNode.disabled = inputNode.value === inputNode.max;
        };

        const setInputValue = value => {
            inputNode.value = parseInt(value) || inputNode.min;
            disableButtonsIfNeeded();
        };

        disableButtonsIfNeeded();
        setInputValue(inputNode.defaultValue || inputNode.value || inputNode.min);

        minusButtonNode.addEventListener("click", () => {
            const nextValue =
                parseInt(inputNode.value) - 1 || parseInt(inputNode.min);
            if (nextValue < inputNode.min) return;
            setInputValue(nextValue);
        });

        plusButtonNode.addEventListener("click", () => {
            const nextValue =
                parseInt(inputNode.value) + 1 || parseInt(inputNode.max);
            if (nextValue > inputNode.max) return;
            setInputValue(nextValue);
        });

        inputNode.addEventListener("input", () => {
            const nextValue = parseInt(inputNode.value.replace(/[^\d]/, ""));
            if (nextValue < parseInt(inputNode.min))
                return setInputValue(inputNode.min);

            if (nextValue > parseInt(inputNode.max))
                return setInputValue(inputNode.max);

            setInputValue(nextValue);
        });
    };

    for (let i = 0; i < COUNTER_NODES.length; i++) {
        const minusButtonNode = COUNTER_NODES[i].querySelector(
            `button[${DEFINITION_ATTRIBUTE}=${DEFINITION_VALUES.minus}]`
        );
        const plusButtonNode = COUNTER_NODES[i].querySelector(
            `button[${DEFINITION_ATTRIBUTE}=${DEFINITION_VALUES.plus}]`
        );
        const inputNode = COUNTER_NODES[i].querySelector(
            `input[${DEFINITION_ATTRIBUTE}=${DEFINITION_VALUES.value}]`
        );

        if (minusButtonNode && plusButtonNode && inputNode)
            setBehaviorOnCounter(minusButtonNode, plusButtonNode, inputNode);
    }
});
