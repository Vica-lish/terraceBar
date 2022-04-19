const onsubmitEmailForm = (form) => {
    console.log('form', form);
    const obj = new XMLHttpRequest();
    obj.onreadystatechange = function () {
        if (obj.readyState >= 4) {
            if (obj.status == 200) {
                const data = JSON.parse(obj.responseText);
                console.log('data', data);
            } else alert(`XMLHttp Status: ${obj.status} + ${obj.statusText}`);
        }
    };

    obj.open('post', form.action, true);
    obj.setRequestHeader('Content-Type', 'application/json');
    obj.send(JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        message: form.message.value
    }));
    return false
}