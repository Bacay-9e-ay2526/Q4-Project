document.addEventListener("DOMContentLoaded", () => {
    console.log("Portal engine operational for 2026 academic term.");
    highlightActiveSidebar();
    setupProfileUpload();
});


function handleLogin() {
    const userField = document.getElementById('username').value.trim();
    const passField = document.getElementById('password').value.trim();
    const errorLog = document.getElementById('login-error');

    if (userField === "" || passField === "") {
        errorLog.innerText = "Please complete both fields to log into your account.";
    } else if (userField === "student" && passField === "12345") {
        errorLog.innerText = "";
        navigateToPage('dashboard.html');
    } else {
        errorLog.innerText = "Invalid username or password. (Hint: Click 'Forgot username / password?')";
    }
}

function clearForm() {
    document.getElementById('username').value = "";
    document.getElementById('password').value = "";
    document.getElementById('login-error').innerText = "";
}


function revealCredentials() {
    alert("✨ Portal Recovery Assistant ✨\n\nUse these credentials to log in:\n• Username: student\n• Password: 12345");
}

function navigateToPage(targetHtmlPage) {
    window.location.href = targetHtmlPage;
}

function highlightActiveSidebar() {
    const currentPath = window.location.pathname;
    const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1);


    if (pageName === 'dashboard.html') setActiveLink('link-dashboard');
    else if (pageName === 'notebooks.html') setActiveLink('link-notebooks');
    else if (pageName === 'tasks.html') setActiveLink('link-tasks');
    else if (pageName === 'profile.html') setActiveLink('link-profile');
}

function setActiveLink(elementId) {
    const activeBtn = document.getElementById(elementId);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}


function launchActivity(activityName) {
    alert(`Initializing secure assessment environment for: ${activityName}\nPlease do not close or refresh this tab.`);
}

function submitProject(projectName) {
    alert(`Opening digital project drop-box for: ${projectName}\nSupported formats: .zip, .html, .css`);
}

function playMedia(clipName) {
    alert(`Streaming media presentation link: "${clipName}"`);
}


function setupProfileUpload() {
    const fileInput = document.querySelector('.profile-avatar-input');
    if (fileInput) {
        fileInput.addEventListener('change', function() {
            if (this.files && this.files[0]) {
                alert("Image asset updated successfully! (Local state change simulated)");
            }
        });
    }
}

function triggerPasswordReset() {
    alert("An authenticated multi-factor security code has been dispatched to your school-issued email address.");
}
