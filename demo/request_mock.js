import Mock from 'mockjs';

let user_count = 0;
let request_times = 0;
export function fetchData (count = 20, times) {
	var list = [];
	let Random = Mock.Random;

	if (request_times === times) {
		return [];
	}

	while (count--) {
		list.push({
			index: user_count++,
			name: Random.name(),
			date: Random.date()
		});
	}

	request_times++;

	return list;
}
