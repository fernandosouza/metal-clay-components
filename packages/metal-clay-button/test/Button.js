'use strict';

import MetalClayButton from '../src/MetalClayButton';

import testDefaultMetalClayButton from './fixture/testDefaultMetalClayButton.html';
import testMetalClayButtonWithAriaLabel from './fixture/testMetalClayButtonWithAriaLabel.html';
import testMetalClayButtonWithLabel from './fixture/testMetalClayButtonWithLabel.html';
import testMetalClayButtonWithName from './fixture/testMetalClayButtonWithName.html';
import testDisabledMetalClayButton from './fixture/testDisabledMetalClayButton.html';
import testSubmitMetalClayButton from './fixture/testSubmitMetalClayButton.html';
import testSuccessMetalClayButton from './fixture/testSuccessMetalClayButton.html';

let sample;

describe('MetalClayButton', function() {
	afterEach(() => {
		if (sample) {
			sample.dispose();
		}
	});

	it('should generate the default markup', function() {
		sample = new MetalClayButton();

		assert.strictEqual(sample.element.outerHTML, testDefaultMetalClayButton.trim());
	});

	it('should render a submit button', function() {
		sample = new MetalClayButton({
			type: 'submit'
		});

		assert.strictEqual(sample.element.outerHTML, testSubmitMetalClayButton.trim());
	});

	it('should render a disabled button', function() {
		sample = new MetalClayButton({
			disabled: true
		});

		assert.strictEqual(sample.element.outerHTML, testDisabledMetalClayButton.trim());
	});

	it('should render a success button', function() {
		sample = new MetalClayButton({
			style: 'success'
		});

		assert.strictEqual(sample.element.outerHTML, testSuccessMetalClayButton.trim());
	});

	it('should render a button with label', function() {
		sample = new MetalClayButton({
			label: 'Label'
		});

		assert.strictEqual(sample.element.outerHTML, testMetalClayButtonWithLabel.trim());
	});

	it('should render a button with label', function() {
		sample = new MetalClayButton({
			name: 'myButton'
		});

		assert.strictEqual(sample.element.outerHTML, testMetalClayButtonWithName.trim());
	});

	it('should render a link with ariaLabel attribute', function() {
		sample = new MetalClayButton({
			ariaLabel: 'My Description',
			href: 'http://liferay.com',
			label: 'Visit Liferay.com'
		});

		assert.strictEqual(sample.element.outerHTML, testMetalClayButtonWithAriaLabel.trim());
	});
});
