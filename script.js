
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

const discordInvite = "https://discord.gg/XVhmhvJnXk";
const discordLink = document.getElementById("discordLink");

if (discordLink) {
    discordLink.href = discordInvite;
}
