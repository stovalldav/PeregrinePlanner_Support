// Renders the Peregrine Planner support site from window.HELP_CONTENT (help-content.js), which is
// generated together with the app's bundled HelpContent.json by
// peregrine-planner/scripts/build-help-content.mjs. Do not hand-edit content here — edit that
// script and re-run it.

(function () {
    "use strict";

    var content = window.HELP_CONTENT || { quickStart: [], birdingTips: [], guideSections: [], faqCategories: [] };
    var allFaqs = content.faqCategories.reduce(function (acc, cat) {
        return acc.concat(cat.faqs.map(function (f) { return Object.assign({ category: cat.name }, f); }));
    }, []);

    var tabs = document.querySelectorAll(".tab");
    var tabContents = document.querySelectorAll(".tab-content");
    var faqSearch = document.getElementById("faqSearch");
    var faqContainer = document.getElementById("faqContainer");
    var quickstartContainer = document.getElementById("quickstartContainer");
    var guideContainer = document.getElementById("guideContainer");
    var backToTop = document.getElementById("backToTop");
    var contactForm = document.getElementById("contactForm");

    var expandedFAQ = null;
    var VALID_TABS = ["quickstart", "guide", "faq", "contact"];

    function esc(s) {
        return String(s)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    function slug(s) {
        return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    }

    // ----- Quick Start -----
    function renderQuickStart() {
        if (!quickstartContainer) return;
        var steps = content.quickStart.map(function (tip, i) {
            return (
                '<div class="card">' +
                '<h3><span class="eyebrow">Step ' + (i + 1) + '</span>' + esc(tip.title) + "</h3>" +
                "<p>" + esc(tip.body) + "</p>" +
                "</div>"
            );
        }).join("");

        var tips = (content.birdingTips || []);
        var tipsBlock = tips.length
            ? '<div class="card"><h3><span class="eyebrow">In the field</span>Birding tips</h3><ul>' +
              tips.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") +
              "</ul></div>"
            : "";

        quickstartContainer.innerHTML = steps + tipsBlock;
    }

    // ----- User Guide -----
    function renderGuide() {
        if (!guideContainer) return;
        guideContainer.innerHTML = content.guideSections.map(function (sec) {
            var bullets = (sec.details || []).map(function (d) { return "<li>" + esc(d) + "</li>"; }).join("");
            var download = "";
            if (sec.downloadHref) {
                download =
                    '<div class="download-row" id="firmware-download">' +
                    '<a class="download-btn" href="' + esc(sec.downloadHref) + '">' +
                    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v10.6l3.3-3.3L16.7 12 12 16.7 7.3 12l1.4-1.7L12 13.6V3zM5 19h14v2H5z"/></svg>' +
                    esc(sec.downloadLabel || "Download") + "</a></div>";
            }
            return (
                '<div class="card" id="' + slug(sec.title) + '">' +
                "<h3>" + esc(sec.title) + "</h3>" +
                "<p>" + esc(sec.description) + "</p>" +
                (bullets ? "<ul>" + bullets + "</ul>" : "") +
                download +
                "</div>"
            );
        }).join("");
    }

    // ----- FAQ (grouped by category, filterable) -----
    function renderFAQs(query) {
        if (!faqContainer) return;
        var q = (query || "").toLowerCase().trim();
        faqContainer.innerHTML = "";

        var anyMatch = false;
        content.faqCategories.forEach(function (cat) {
            var matches = cat.faqs.filter(function (faq) {
                return !q || faq.question.toLowerCase().indexOf(q) !== -1 || faq.answer.toLowerCase().indexOf(q) !== -1;
            });
            if (matches.length === 0) return;
            anyMatch = true;

            var heading = document.createElement("h3");
            heading.className = "faq-category-title";
            heading.textContent = cat.name;
            faqContainer.appendChild(heading);

            matches.forEach(function (faq) {
                var item = document.createElement("div");
                item.className = "faq-item";
                item.innerHTML =
                    '<button class="faq-question" type="button" aria-expanded="false" data-faq="' + esc(faq.id) + '">' +
                    "<span>" + esc(faq.question) + "</span>" +
                    '<svg class="chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 10l5 5 5-5z"/></svg>' +
                    "</button>" +
                    '<div class="faq-answer" id="faq-' + esc(faq.id) + '"><p>' + esc(faq.answer) + "</p></div>";
                faqContainer.appendChild(item);
            });
        });

        if (!anyMatch) {
            var empty = document.createElement("p");
            empty.className = "faq-empty";
            empty.textContent = "No FAQs match your search.";
            faqContainer.appendChild(empty);
        }
        expandedFAQ = null;
    }

    function toggleFAQ(id) {
        var answer = document.getElementById("faq-" + id);
        if (!answer) return;
        var btn = answer.previousElementSibling;

        if (expandedFAQ && expandedFAQ !== id) {
            var prev = document.getElementById("faq-" + expandedFAQ);
            if (prev) {
                prev.classList.remove("expanded");
                if (prev.previousElementSibling) prev.previousElementSibling.setAttribute("aria-expanded", "false");
            }
        }
        var nowOpen = answer.classList.toggle("expanded");
        btn.setAttribute("aria-expanded", nowOpen ? "true" : "false");
        expandedFAQ = nowOpen ? id : null;
    }

    // ----- Tabs -----
    function switchTab(name) {
        tabs.forEach(function (t) { t.classList.toggle("active", t.dataset.tab === name); });
        tabContents.forEach(function (c) { c.classList.toggle("active", c.id === name); });
    }

    // ----- Deep links: #guide opens that tab; #firmware-download opens the tab holding it + scrolls -----
    function applyDeepLink() {
        var target = window.location.hash.replace("#", "");
        if (!target) return;
        if (VALID_TABS.indexOf(target) !== -1) { switchTab(target); return; }
        var el = document.getElementById(target);
        if (!el) return;
        var section = el.closest(".tab-content");
        if (section) switchTab(section.id);
        setTimeout(function () { el.scrollIntoView({ behavior: "smooth", block: "start" }); }, 60);
    }

    // ----- Contact form -> mailto (matches the in-app Contact Support behaviour) -----
    function handleContactSubmit(e) {
        e.preventDefault();
        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value.trim();
        if (!name || !email || !message) return;

        var body =
            "Name: " + name + "\n" +
            "Email: " + email + "\n\n" +
            message + "\n\n----\nSent from the Peregrine Planner support site";
        var href =
            "mailto:peregrineplanner@gmail.com" +
            "?subject=" + encodeURIComponent("[" + subject + "] " + name) +
            "&body=" + encodeURIComponent(body);
        window.location.href = href;
    }

    // ----- Init -----
    document.addEventListener("DOMContentLoaded", function () {
        renderQuickStart();
        renderGuide();
        renderFAQs("");

        tabs.forEach(function (tab) {
            tab.addEventListener("click", function () { switchTab(tab.dataset.tab); });
        });

        if (faqSearch) {
            faqSearch.addEventListener("input", function (e) { renderFAQs(e.target.value); });
        }

        if (faqContainer) {
            faqContainer.addEventListener("click", function (e) {
                var btn = e.target.closest(".faq-question");
                if (btn) toggleFAQ(btn.dataset.faq);
            });
        }

        if (backToTop) {
            window.addEventListener("scroll", function () {
                backToTop.classList.toggle("visible", window.pageYOffset > 320);
            });
            backToTop.addEventListener("click", function () {
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        }

        if (contactForm) contactForm.addEventListener("submit", handleContactSubmit);

        applyDeepLink();
        window.addEventListener("hashchange", applyDeepLink);
    });
})();
