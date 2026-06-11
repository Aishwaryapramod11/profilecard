document.addEventListener('DOMContentLoaded', () => {
  const followBtn = document.getElementById('follow-btn');
  const messageBtn = document.getElementById('message-btn');

  // Follow Toggle Logic
  let isFollowing = false;
  followBtn.addEventListener('click', () => {
    isFollowing = !isFollowing;
    if (isFollowing) {
      followBtn.textContent = 'Following';
      followBtn.classList.add('active');
    } else {
      followBtn.textContent = 'Follow';
      followBtn.classList.remove('active');
    }
  });

  // Message Toggle Logic
  let isMessaging = false;
  messageBtn.addEventListener('click', () => {
    isMessaging = !isMessaging;
    if (isMessaging) {
      messageBtn.textContent = 'Sending...';
      setTimeout(() => {
        messageBtn.textContent = 'Message';
        isMessaging = false;
        // Trigger generic email client or similar action
        window.location.href = "mailto:aishwarya.pramod@example.com?subject=Hello Aishwarya";
      }, 800);
    }
  });
});
