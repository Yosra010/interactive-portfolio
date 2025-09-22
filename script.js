// Simple intersection observer for subtle reveal
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in') })
},{threshold:.12})
document.querySelectorAll('.fade-up').forEach(el=>io.observe(el))

// Contact form (demo only)
function handleContact(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if(!name||!email||!message){ alert('Please complete all fields'); return }
  alert('Thanks '+name+' — message sent (demo). Replace this with a real handler to receive messages.');
  e.target.reset();
}
