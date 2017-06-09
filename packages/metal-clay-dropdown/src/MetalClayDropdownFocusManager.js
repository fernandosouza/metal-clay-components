import KeyboardFocusManager from 'metal-keyboard-focus';

class MetalClayDropdownFocusManager extends KeyboardFocusManager {
  /**
	 * Focus on the first item.
	 * @protected
	 */
  focusTheFirstElement_() {
		let elements = this.getItemsRef_();
		this.component_.refs[elements[0]].focus();
	}

  /**
	 * Returns an array of keys that matches with expected pattern.
	 * @return {Array}
	 * @protected
	 */
	getItemsRef_() {
		return Object.keys(this.component_.refs).filter((key) => {
			return this.itemMatchs_(key);
		});
	}

  /**
	 * @inheritDoc
	 * @override
	 */
  handleKeyDefault_(event) {
    const ref = event.delegateTarget.getAttribute('ref');
		if (!this.itemMatchs_(ref)) {
			return;
		}

		let elements = this.getItemsRef_();

		let position = elements.indexOf(ref);
		switch (event.keyCode) {
			case 37:
			case 38:
				return elements[position - 1];
			case 9:
        event.preventDefault();
				if (event.shiftKey) {
					return elements[position - 1];
				}
				return elements[position + 1];
			case 39:
			case 40:
				return elements[position + 1];
		}
  }

  /**
	 * Checks if the key matches with the pattern.
	 * @protected
	 */
  itemMatchs_(ref) {
		return KeyboardFocusManager.REF_REGEX.exec(ref);
	}

  /**
	 * @inheritDoc
	 * @override
	 */
  start() {
    this.focusTheFirstElement_();
    super.start();
  }
}

export default MetalClayDropdownFocusManager;