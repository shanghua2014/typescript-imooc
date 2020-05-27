enum Status {
	OFFLINE,
	ONLINE,
	DELETE
}

// const Status = {
// 	OFFLINE: 0,
// 	ONLINE: 1,
// 	DELETE: 2
// };

function getResult(status) {
	let result = '';
	switch (status) {
		case 0:
			result = 'offline';
			break;
		case 1:
			result = 'online';
			break;
		case 2:
			result = 'delete';
			break;
	}
	return result;
}
let res = getResult(1);
let res2 = getResult(Status.DELETE);
console.log(res);
console.log(res2);
