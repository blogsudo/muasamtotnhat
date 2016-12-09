function showrecentposts_img_dienthoai_1(c) {
    for (var a = 0; a < numposts_img; a++) {
        var b = first_part_1(c, a),
            d = document.getElementById("dienthoai-img-1");
        last_part_1(b, d)
    }
}

function showrecentposts_img_maytinhbang_1(c) {
    for (var a = 0; a < numposts_img; a++) {
        var b = first_part_1(c, a),
            d = document.getElementById("maytinhbang-img-1");
        last_part_1(b, d)
    }
}

function showrecentposts_img_laptop_1(c) {
    for (var a = 0; a < numposts_img; a++) {
        var b = first_part_1(c, a),
            d = document.getElementById("laptop-img-1");
        last_part_1(b, d)
    }
}

function showrecentposts_img_tivi_1(c) {
    for (var a = 0; a < numposts_img; a++) {
        var b = first_part_1(c, a),
            d = document.getElementById("tivi-img-1");
        last_part_1(b, d)
    }
}

function showrecentposts_img_it_1(c) {
    for (var a = 0; a < numposts_img; a++) {
        var b = first_part_1(c, a),
            d = document.getElementById("it-img-1");
        last_part_1(b, d)
    }
}

function showrecentposts_img_camera_1(c) {
    for (var a = 0; a < numposts_img; a++) {
        var b = first_part_1(c, a),
            d = document.getElementById("camera-img-1");
        last_part_1(b, d)
    }
}

function showrecentposts_img_nghenhin_1(c) {
    for (var a = 0; a < numposts_img; a++) {
        var b = first_part_1(c, a),
            d = document.getElementById("nghenhin-img-1");
        last_part_1(b, d)
    }
}

function showrecentposts_img_dienmay_1(c) {
    for (var a = 0; a < numposts_img; a++) {
        var b = first_part_1(c, a),
            d = document.getElementById("dienmay-img-1");
        last_part_1(b, d)
    }
}

function showrecentposts_img_thoitrang_1(c) {
    for (var a = 0; a < numposts_img; a++) {
        var b = first_part_1(c, a),
            d = document.getElementById("thoitrang-img-1");
        last_part_1(b, d)
    }
}

function showrecentposts_img_thethao_1(c) {
    for (var a = 0; a < numposts_img; a++) {
        var b = first_part_1(c, a),
            d = document.getElementById("thethao-img-1");
        last_part_1(b, d)
    }
}

function showrecentposts_img_suckhoe_1(c) {
    for (var a = 0; a < numposts_img; a++) {
        var b = first_part_1(c, a),
            d = document.getElementById("suckhoe-img-1");
        last_part_1(b, d)
    }
}

function showrecentposts_img_lamdep_1(c) {
    for (var a = 0; a < numposts_img; a++) {
        var b = first_part_1(c, a),
            d = document.getElementById("lamdep-img-1");
        last_part_1(b, d)
    }
}

function showrecentposts_img_danhgiasp_1(c) {
    for (var a = 0; a < numposts_img; a++) {
        var b = first_part_1(c, a),
            d = document.getElementById("danhgiasp-img-1");
        last_part_1(b, d)
    }
}

function showrecentposts_img_lamsao_1(c) {
    for (var a = 0; a < numposts_img; a++) {
        var b = first_part_1(c, a),
            d = document.getElementById("lamsao-img-1");
        last_part_1(b, d)
    }
}

function showrecentposts_img_magiamgia_1(c) {
    for (var a = 0; a < numposts_img; a++) {
        var b = first_part_1(c, a),
            d = document.getElementById("magiamgia-img-1");
        last_part_1(b, d)
    }
}

function showrecentposts_img_khuyenmai_1(c) {
    for (var a = 0; a < numposts_img; a++) {
        var b = first_part_1(c, a),
            d = document.getElementById("khuyenmai-img-1");
        last_part_1(b, d)
    }
}

function first_part_1(c, a) {
    var b = c.feed.entry[a],
        d = b.title.$t,
        e, g = '<img src="' + (b.media$thumbnail ? b.media$thumbnail.url : "https://lh3.googleusercontent.com/-WSAcJKxDAy4/VQBEpcN5lgI/AAAAAAAAIxk/Z0JdkyF5CdE/s264/default-no-image.png").replace("s72-c", "w" + bsrpg_thumbSize_1 + "-h" + bsrpg_thumbSize_height_1 + "-c") + '" width="' + bsrpg_thumbSize_1 + '" height="' + bsrpg_thumbSize_height_1 + '">';
    if (a != c.feed.entry.length) {
        for (var f = 0; f < b.link.length; f++)
            if ("alternate" == b.link[f].rel) {
                e = b.link[f].href;
                break
            }
        g = '<a href="' +
            e + '" title="' + d + '">' + g + "</a>";
        d = d.link(e);
        e = "....".link(e);
        b = "content" in b ? b.content.$t : "summary" in b ? b.summary.$t : "";
        b = b.replace(/<\S[^>]*>/g, "");
        return [g, d, b, e]
    }
}

function last_part_1(c, a) {
    var b = c[0],
        d = c[1],
        e = c[2],
        g = c[3],
        f = document.createElement("div");
    f.className = "postw";
    var l = document.createElement("div");
    l.className = "posti";
    var h = document.createElement("div");
    h.className = "tsw";
    var m = document.createElement("div");
    m.className = "mtrpw";
    var k = document.createElement("div");
    k.className = "mtrpwsumm";
    l.innerHTML = b;
    m.innerHTML = d;
    1 == showpostsummary_img && (e.length < numchars_img ? k.innerHTML = e : (e = e.substring(0, numchars_img), b = e.lastIndexOf(" "), e = e.substring(0, b), k.innerHTML =
        e + " " + g));
    h.appendChild(m);
    h.appendChild(k);
    f.appendChild(l);
    f.appendChild(h);
    a.appendChild(f)
};