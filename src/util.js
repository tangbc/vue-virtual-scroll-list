
export function throttle (fn, delay, immediate, debounce) {
	let curr = +new Date();
	let last_call = 0, last_exec = 0;
	let timer = null, diff, context, args;
	let exec = function () {
		last_exec = curr;
		fn.apply(context, args);
	};

	return function () {
		curr = +new Date();
		context = this;
		args = arguments;
		diff = curr - (debounce ? last_call : last_exec) - delay;
		clearTimeout(timer);

		if (debounce) {
			if (immediate) {
				timer = setTimeout(exec, delay);
			} else if (diff >= 0) {
				exec();
			}
		} else {
			if (diff >= 0) {
				exec();
			} else if (immediate) {
				timer = setTimeout(exec, -diff);
			}
		}
		last_call = curr;
	}
}
