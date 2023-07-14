const Options = {
    method: 'GET',
    headers: {
		'X-RapidAPI-Key': 'e2efe5cd5dmsh8ca13bd4331b69ep1db09bjsn2ce1f9e86ad6',
		'X-RapidAPI-Host': 'ip-geolocation-ipwhois-io.p.rapidapi.com'
	}
}

const  fetchIpInfo = ip => {
    return (fetch (`https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/?ip=${ip}`, Options)
        .then(answer => answer.json())
        .catch(error => console.error(error))
    )
}

const $ = element => document.querySelector(element);

const form$ = $('form');
const showIp$ = $('.showIp');

form$.onsubmit = async (e) => {
    e.preventDefault();
    const valueInput = $('.inputIp').value;

    if (!valueInput) return
    const getIpInfo = await fetchIpInfo(valueInput);

    if (getIpInfo) {
        showIp$.innerHTML = JSON.stringify(getIpInfo, null, 2)
    }

    showIp$.classList.add('border-2')

}