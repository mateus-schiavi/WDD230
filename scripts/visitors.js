function incrementVisitorCount() {
    let count = sessionStorage.getItem('visitorCount');
    
    if (count === null) {
        count = 0;
    } else {
        count = parseInt(count);
    }
    
    count++;
    
   
    sessionStorage.setItem('visitorCount', count);
    

    document.getElementById('visitorCount').textContent = count;
}


incrementVisitorCount();