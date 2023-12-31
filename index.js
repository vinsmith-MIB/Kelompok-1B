
  function simpandata1(formnama) {
    document
      .getElementById("survey-form")
      .addEventListener("click", function () {
        localStorage.setItem(formnama, this.innerHTML);
      });
  }

  function ambildata1(formnama) {
    var form1 = document.getElementById("survey-form-hasil");
    form1.innerHTML = localStorage.getItem(formnama);
  }

  function loadpindah1() {
    var anchor = document.getElementsByClassName("pindah-anchor");
    for (let i = 0; i < anchor.length; i++) {
      anchor[i].addEventListener("click", function () {
        var inputs = document.querySelectorAll("form input, form textarea");
        inputs.forEach(function (input) {
          if(input.type === "radio") {
            if(input.checked) {
              localStorage.setItem(input.name, input.value);
            }
          }
          else if(input.type === "checkbox") {
            var checkboxs = document.querySelectorAll(`input[name="${input.name}"]`);
            checkboxs.forEach(function checkbox(checkbox) {
              if(checkbox.checked) {
                localStorage.setItem(checkbox.id, checkbox.value);
              }  
            });
          }
          else if(!input.disabled)
          localStorage.setItem(input.name, input.value);
        });

        var selects = document.querySelectorAll("select");

        selects.forEach(function (select) {
          var options = select.querySelectorAll("option");
          options.forEach(function (option) {
            if(option.selected) {
              localStorage.setItem(select.name, option.value);
            }
          });
        });

      });
    }
  }

  function valueform1() {
    var inputs = document.querySelectorAll("form input, form textarea");
    inputs.forEach(function (input) {
      var savedValue = localStorage.getItem(input.name);
      if (savedValue !== null) {
        if(input.type === "text" || input.type === "email" || input.type === "number" || input.type === "textarea")
        input.value = savedValue;
        else if(input.type === "radio"){
          if(input.value === savedValue){
            input.checked = true;
          }
        }
      }
    });
    var checkboxes = document.querySelectorAll("input[type=checkbox]");
    checkboxes.forEach(function (checkbox) {
      var savedValue = localStorage.getItem(checkbox.id);
      if (savedValue !== null) {
        checkbox.checked = true;
      }
    });
    var selects = document.querySelectorAll("select");
    selects.forEach(function (select){
      select.selectedIndex = localStorage.getItem(select.name);
    });
  }

  function disabledall() {
    var inputs = document.querySelectorAll("input, textarea, select");
    inputs.forEach(function (input) {
        input.disabled = true;
    });
  }


  function disabledlainnya() {
    var checkbox = document.querySelector(".lainnya input[type=checkbox]");
    var text = document.querySelector(".lainnya input[type=text]");
    if (checkbox.checked) {
      text.disabled = false;
    } else {
      text.disabled = true;
    }
  }

  function navbaranimate() {
    const toggleBtn = document.querySelector('.toggle_btn')
        const toggleBtnIcon = document.querySelector('.toggle_btn i')
        const dropDownMenu = document.querySelector('.dropdown_menu')

        toggleBtn.onclick = function () {
            dropDownMenu.classList.toggle('open')
            const isOpen = dropDownMenu.classList.contains('open')

            toggleBtnIcon.classList = isOpen
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars'
        }
  }

  
function lihatHasilButton() {
  var ahref = document.querySelectorAll("form a");
  var button = document.querySelector("form #kirim");

  ahref.forEach(function (a) {
    if(a.href.includes("surveyweb1.html")) {
      a.href = "lihat-hasil.html";
      console.log(a.href);
    }
    else if(a.href.includes("surveyweb2.html")) {
      a.href = "lihat-hasil-2.html";
    }
  });
  
  if(button != null) {
    button.style.opacity = 0;
    button.disabled = true;
    button.addEventListener("mouseover", function() {
      button.style.cursor = "default";
    });
  }
}

  
