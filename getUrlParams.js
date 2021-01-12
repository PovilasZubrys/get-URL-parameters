function getParams() {
    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    const ft = urlParams.get('ft');
    document.getElementById('ft_param').innerHTML = ft;
}