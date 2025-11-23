import { css as m, defaultConverter as ot, LitElement as Z, html as h } from "lit";
import { property as i, state as y, query as G, customElement as nt } from "lit/decorators.js";
import { isTemplateResult as wt } from "lit/directive-helpers.js";
import { classMap as z } from "lit/directives/class-map.js";
import { ifDefined as u } from "lit/directives/if-defined.js";
import { live as _t } from "lit/directives/live.js";
import { literal as T, html as O } from "lit/static-html.js";
var xt = m`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`, kt = (t = "value") => (e, o) => {
  const r = e.constructor, l = r.prototype.attributeChangedCallback;
  r.prototype.attributeChangedCallback = function(s, d, p) {
    var C;
    const v = r.getPropertyOptions(t), F = typeof v.attribute == "string" ? v.attribute : t;
    if (s === F) {
      const w = v.converter || ot, et = (typeof w == "function" ? w : (C = w == null ? void 0 : w.fromAttribute) != null ? C : ot.fromAttribute)(p, v.type);
      this[t] !== et && (this[o] = et);
    }
    l.call(this, s, d, p);
  };
}, Ct = m`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`, ut = Object.defineProperty, $t = Object.defineProperties, zt = Object.getOwnPropertyDescriptor, St = Object.getOwnPropertyDescriptors, rt = Object.getOwnPropertySymbols, Vt = Object.prototype.hasOwnProperty, Et = Object.prototype.propertyIsEnumerable, ct = (t) => {
  throw TypeError(t);
}, at = (t, e, o) => e in t ? ut(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, A = (t, e) => {
  for (var o in e || (e = {}))
    Vt.call(e, o) && at(t, o, e[o]);
  if (rt)
    for (var o of rt(e))
      Et.call(e, o) && at(t, o, e[o]);
  return t;
}, dt = (t, e) => $t(t, St(e)), a = (t, e, o, r) => {
  for (var l = r > 1 ? void 0 : r ? zt(e, o) : e, s = t.length - 1, d; s >= 0; s--)
    (d = t[s]) && (l = (r ? d(e, o, l) : d(l)) || l);
  return r && l && ut(e, o, l), l;
}, ht = (t, e, o) => e.has(t) || ct("Cannot " + o), Lt = (t, e, o) => (ht(t, e, "read from private field"), e.get(t)), Bt = (t, e, o) => e.has(t) ? ct("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, o), It = (t, e, o, r) => (ht(t, e, "write to private field"), e.set(t, o), o), E = /* @__PURE__ */ new WeakMap(), L = /* @__PURE__ */ new WeakMap(), B = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new WeakSet(), M = /* @__PURE__ */ new WeakMap(), pt = class {
  constructor(t, e) {
    this.handleFormData = (o) => {
      const r = this.options.disabled(this.host), l = this.options.name(this.host), s = this.options.value(this.host), d = this.host.tagName.toLowerCase() === "sl-button";
      this.host.isConnected && !r && !d && typeof l == "string" && l.length > 0 && typeof s < "u" && (Array.isArray(s) ? s.forEach((p) => {
        o.formData.append(l, p.toString());
      }) : o.formData.append(l, s.toString()));
    }, this.handleFormSubmit = (o) => {
      var r;
      const l = this.options.disabled(this.host), s = this.options.reportValidity;
      this.form && !this.form.noValidate && ((r = E.get(this.form)) == null || r.forEach((d) => {
        this.setUserInteracted(d, !0);
      })), this.form && !this.form.noValidate && !l && !s(this.host) && (o.preventDefault(), o.stopImmediatePropagation());
    }, this.handleFormReset = () => {
      this.options.setValue(this.host, this.options.defaultValue(this.host)), this.setUserInteracted(this.host, !1), M.set(this.host, []);
    }, this.handleInteraction = (o) => {
      const r = M.get(this.host);
      r.includes(o.type) || r.push(o.type), r.length === this.options.assumeInteractionOn.length && this.setUserInteracted(this.host, !0);
    }, this.checkFormValidity = () => {
      if (this.form && !this.form.noValidate) {
        const o = this.form.querySelectorAll("*");
        for (const r of o)
          if (typeof r.checkValidity == "function" && !r.checkValidity())
            return !1;
      }
      return !0;
    }, this.reportFormValidity = () => {
      if (this.form && !this.form.noValidate) {
        const o = this.form.querySelectorAll("*");
        for (const r of o)
          if (typeof r.reportValidity == "function" && !r.reportValidity())
            return !1;
      }
      return !0;
    }, (this.host = t).addController(this), this.options = A({
      form: (o) => {
        const r = o.form;
        if (r) {
          const s = o.getRootNode().querySelector(`#${r}`);
          if (s)
            return s;
        }
        return o.closest("form");
      },
      name: (o) => o.name,
      value: (o) => o.value,
      defaultValue: (o) => o.defaultValue,
      disabled: (o) => {
        var r;
        return (r = o.disabled) != null ? r : !1;
      },
      reportValidity: (o) => typeof o.reportValidity == "function" ? o.reportValidity() : !0,
      checkValidity: (o) => typeof o.checkValidity == "function" ? o.checkValidity() : !0,
      setValue: (o, r) => o.value = r,
      assumeInteractionOn: ["sl-input"]
    }, e);
  }
  hostConnected() {
    const t = this.options.form(this.host);
    t && this.attachForm(t), M.set(this.host, []), this.options.assumeInteractionOn.forEach((e) => {
      this.host.addEventListener(e, this.handleInteraction);
    });
  }
  hostDisconnected() {
    this.detachForm(), M.delete(this.host), this.options.assumeInteractionOn.forEach((t) => {
      this.host.removeEventListener(t, this.handleInteraction);
    });
  }
  hostUpdated() {
    const t = this.options.form(this.host);
    t || this.detachForm(), t && this.form !== t && (this.detachForm(), this.attachForm(t)), this.host.hasUpdated && this.setValidity(this.host.validity.valid);
  }
  attachForm(t) {
    t ? (this.form = t, E.has(this.form) ? E.get(this.form).add(this.host) : E.set(this.form, /* @__PURE__ */ new Set([this.host])), this.form.addEventListener("formdata", this.handleFormData), this.form.addEventListener("submit", this.handleFormSubmit), this.form.addEventListener("reset", this.handleFormReset), L.has(this.form) || (L.set(this.form, this.form.reportValidity), this.form.reportValidity = () => this.reportFormValidity()), B.has(this.form) || (B.set(this.form, this.form.checkValidity), this.form.checkValidity = () => this.checkFormValidity())) : this.form = void 0;
  }
  detachForm() {
    if (!this.form) return;
    const t = E.get(this.form);
    t && (t.delete(this.host), t.size <= 0 && (this.form.removeEventListener("formdata", this.handleFormData), this.form.removeEventListener("submit", this.handleFormSubmit), this.form.removeEventListener("reset", this.handleFormReset), L.has(this.form) && (this.form.reportValidity = L.get(this.form), L.delete(this.form)), B.has(this.form) && (this.form.checkValidity = B.get(this.form), B.delete(this.form)), this.form = void 0));
  }
  setUserInteracted(t, e) {
    e ? R.add(t) : R.delete(t), t.requestUpdate();
  }
  doAction(t, e) {
    if (this.form) {
      const o = document.createElement("button");
      o.type = t, o.style.position = "absolute", o.style.width = "0", o.style.height = "0", o.style.clipPath = "inset(50%)", o.style.overflow = "hidden", o.style.whiteSpace = "nowrap", e && (o.name = e.name, o.value = e.value, ["formaction", "formenctype", "formmethod", "formnovalidate", "formtarget"].forEach((r) => {
        e.hasAttribute(r) && o.setAttribute(r, e.getAttribute(r));
      })), this.form.append(o), o.click(), o.remove();
    }
  }
  /** Returns the associated `<form>` element, if one exists. */
  getForm() {
    var t;
    return (t = this.form) != null ? t : null;
  }
  /** Resets the form, restoring all the control to their default value */
  reset(t) {
    this.doAction("reset", t);
  }
  /** Submits the form, triggering validation and form data injection. */
  submit(t) {
    this.doAction("submit", t);
  }
  /**
   * Synchronously sets the form control's validity. Call this when you know the future validity but need to update
   * the host element immediately, i.e. before Lit updates the component in the next update.
   */
  setValidity(t) {
    const e = this.host, o = !!R.has(e), r = !!e.required;
    e.toggleAttribute("data-required", r), e.toggleAttribute("data-optional", !r), e.toggleAttribute("data-invalid", !t), e.toggleAttribute("data-valid", t), e.toggleAttribute("data-user-invalid", !t && o), e.toggleAttribute("data-user-valid", t && o);
  }
  /**
   * Updates the form control's validity based on the current value of `host.validity.valid`. Call this when anything
   * that affects constraint validation changes so the component receives the correct validity states.
   */
  updateValidity() {
    const t = this.host;
    this.setValidity(t.validity.valid);
  }
  /**
   * Dispatches a non-bubbling, cancelable custom event of type `sl-invalid`.
   * If the `sl-invalid` event will be cancelled then the original `invalid`
   * event (which may have been passed as argument) will also be cancelled.
   * If no original `invalid` event has been passed then the `sl-invalid`
   * event will be cancelled before being dispatched.
   */
  emitInvalidEvent(t) {
    const e = new CustomEvent("sl-invalid", {
      bubbles: !1,
      composed: !1,
      cancelable: !0,
      detail: {}
    });
    t || e.preventDefault(), this.host.dispatchEvent(e) || t == null || t.preventDefault();
  }
}, X = Object.freeze({
  badInput: !1,
  customError: !1,
  patternMismatch: !1,
  rangeOverflow: !1,
  rangeUnderflow: !1,
  stepMismatch: !1,
  tooLong: !1,
  tooShort: !1,
  typeMismatch: !1,
  valid: !0,
  valueMissing: !1
});
Object.freeze(dt(A({}, X), {
  valid: !1,
  valueMissing: !0
}));
Object.freeze(dt(A({}, X), {
  valid: !1,
  customError: !0
}));
var Y = class {
  constructor(t, ...e) {
    this.slotNames = [], this.handleSlotChange = (o) => {
      const r = o.target;
      (this.slotNames.includes("[default]") && !r.name || r.name && this.slotNames.includes(r.name)) && this.host.requestUpdate();
    }, (this.host = t).addController(this), this.slotNames = e;
  }
  hasDefaultSlot() {
    return [...this.host.childNodes].some((t) => {
      if (t.nodeType === t.TEXT_NODE && t.textContent.trim() !== "")
        return !0;
      if (t.nodeType === t.ELEMENT_NODE) {
        const e = t;
        if (e.tagName.toLowerCase() === "sl-visually-hidden")
          return !1;
        if (!e.hasAttribute("slot"))
          return !0;
      }
      return !1;
    });
  }
  hasNamedSlot(t) {
    return this.host.querySelector(`:scope > [slot="${t}"]`) !== null;
  }
  test(t) {
    return t === "[default]" ? this.hasDefaultSlot() : this.hasNamedSlot(t);
  }
  hostConnected() {
    this.host.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
  }
  hostDisconnected() {
    this.host.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
  }
};
const H = /* @__PURE__ */ new Set(), $ = /* @__PURE__ */ new Map();
let _, J = "ltr", tt = "en";
const bt = typeof MutationObserver < "u" && typeof document < "u" && typeof document.documentElement < "u";
if (bt) {
  const t = new MutationObserver(mt);
  J = document.documentElement.dir || "ltr", tt = document.documentElement.lang || navigator.language, t.observe(document.documentElement, {
    attributes: !0,
    attributeFilter: ["dir", "lang"]
  });
}
function ft(...t) {
  t.map((e) => {
    const o = e.$code.toLowerCase();
    $.has(o) ? $.set(o, Object.assign(Object.assign({}, $.get(o)), e)) : $.set(o, e), _ || (_ = e);
  }), mt();
}
function mt() {
  bt && (J = document.documentElement.dir || "ltr", tt = document.documentElement.lang || navigator.language), [...H.keys()].map((t) => {
    typeof t.requestUpdate == "function" && t.requestUpdate();
  });
}
let At = class {
  constructor(e) {
    this.host = e, this.host.addController(this);
  }
  hostConnected() {
    H.add(this.host);
  }
  hostDisconnected() {
    H.delete(this.host);
  }
  dir() {
    return `${this.host.dir || J}`.toLowerCase();
  }
  lang() {
    return `${this.host.lang || tt}`.toLowerCase();
  }
  getTranslationData(e) {
    var o, r;
    const l = new Intl.Locale(e.replace(/_/g, "-")), s = l == null ? void 0 : l.language.toLowerCase(), d = (r = (o = l == null ? void 0 : l.region) === null || o === void 0 ? void 0 : o.toLowerCase()) !== null && r !== void 0 ? r : "", p = $.get(`${s}-${d}`), C = $.get(s);
    return { locale: l, language: s, region: d, primary: p, secondary: C };
  }
  exists(e, o) {
    var r;
    const { primary: l, secondary: s } = this.getTranslationData((r = o.lang) !== null && r !== void 0 ? r : this.lang());
    return o = Object.assign({ includeFallback: !1 }, o), !!(l && l[e] || s && s[e] || o.includeFallback && _ && _[e]);
  }
  term(e, ...o) {
    const { primary: r, secondary: l } = this.getTranslationData(this.lang());
    let s;
    if (r && r[e])
      s = r[e];
    else if (l && l[e])
      s = l[e];
    else if (_ && _[e])
      s = _[e];
    else
      return console.error(`No translation found for: ${String(e)}`), String(e);
    return typeof s == "function" ? s(...o) : s;
  }
  date(e, o) {
    return e = new Date(e), new Intl.DateTimeFormat(this.lang(), o).format(e);
  }
  number(e, o) {
    return e = Number(e), isNaN(e) ? "" : new Intl.NumberFormat(this.lang(), o).format(e);
  }
  relativeTime(e, o, r) {
    return new Intl.RelativeTimeFormat(this.lang(), r).format(e, o);
  }
};
var gt = {
  $code: "en",
  $name: "English",
  $dir: "ltr",
  carousel: "Carousel",
  clearEntry: "Clear entry",
  close: "Close",
  copied: "Copied",
  copy: "Copy",
  currentValue: "Current value",
  error: "Error",
  goToSlide: (t, e) => `Go to slide ${t} of ${e}`,
  hidePassword: "Hide password",
  loading: "Loading",
  nextSlide: "Next slide",
  numOptionsSelected: (t) => t === 0 ? "No options selected" : t === 1 ? "1 option selected" : `${t} options selected`,
  previousSlide: "Previous slide",
  progress: "Progress",
  remove: "Remove",
  resize: "Resize",
  scrollToEnd: "Scroll to end",
  scrollToStart: "Scroll to start",
  selectAColorFromTheScreen: "Select a color from the screen",
  showPassword: "Show password",
  slideNum: (t) => `Slide ${t}`,
  toggleColorFormat: "Toggle color format"
};
ft(gt);
var Ft = gt, U = class extends At {
};
ft(Ft);
var W = "";
function lt(t) {
  W = t;
}
function Mt(t = "") {
  if (!W) {
    const e = [...document.getElementsByTagName("script")], o = e.find((r) => r.hasAttribute("data-shoelace"));
    if (o)
      lt(o.getAttribute("data-shoelace"));
    else {
      const r = e.find((s) => /shoelace(\.min)?\.js($|\?)/.test(s.src) || /shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src));
      let l = "";
      r && (l = r.getAttribute("src")), lt(l.split("/").slice(0, -1).join("/"));
    }
  }
  return W.replace(/\/$/, "") + (t ? `/${t.replace(/^\//, "")}` : "");
}
var Dt = {
  name: "default",
  resolver: (t) => Mt(`assets/icons/${t}.svg`)
}, Ot = Dt, it = {
  caret: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,
  check: `
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
  "chevron-down": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
  "chevron-left": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,
  "chevron-right": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
  copy: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,
  eye: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,
  "eye-slash": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,
  eyedropper: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,
  "grip-vertical": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,
  indeterminate: `
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
  "person-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,
  "play-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,
  "pause-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,
  radio: `
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,
  "star-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,
  "x-lg": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,
  "x-circle-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `
}, Pt = {
  name: "system",
  resolver: (t) => t in it ? `data:image/svg+xml,${encodeURIComponent(it[t])}` : ""
}, Tt = Pt, Ut = [Ot, Tt], K = [];
function Nt(t) {
  K.push(t);
}
function Rt(t) {
  K = K.filter((e) => e !== t);
}
function st(t) {
  return Ut.find((e) => e.name === t);
}
var qt = m`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;
function V(t, e) {
  const o = A({
    waitUntilFirstUpdate: !1
  }, e);
  return (r, l) => {
    const { update: s } = r, d = Array.isArray(t) ? t : [t];
    r.update = function(p) {
      d.forEach((C) => {
        const v = C;
        if (p.has(v)) {
          const F = p.get(v), w = this[v];
          F !== w && (!o.waitUntilFirstUpdate || this.hasUpdated) && this[l](F, w);
        }
      }), s.call(this, p);
    };
  };
}
var x = m`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`, P, g = class extends Z {
  constructor() {
    super(), Bt(this, P, !1), this.initialReflectedProperties = /* @__PURE__ */ new Map(), Object.entries(this.constructor.dependencies).forEach(([t, e]) => {
      this.constructor.define(t, e);
    });
  }
  emit(t, e) {
    const o = new CustomEvent(t, A({
      bubbles: !0,
      cancelable: !1,
      composed: !0,
      detail: {}
    }, e));
    return this.dispatchEvent(o), o;
  }
  /* eslint-enable */
  static define(t, e = this, o = {}) {
    const r = customElements.get(t);
    if (!r) {
      try {
        customElements.define(t, e, o);
      } catch {
        customElements.define(t, class extends e {
        }, o);
      }
      return;
    }
    let l = " (unknown version)", s = l;
    "version" in e && e.version && (l = " v" + e.version), "version" in r && r.version && (s = " v" + r.version), !(l && s && l === s) && console.warn(
      `Attempted to register <${t}>${l}, but <${t}>${s} has already been registered.`
    );
  }
  attributeChangedCallback(t, e, o) {
    Lt(this, P) || (this.constructor.elementProperties.forEach(
      (r, l) => {
        r.reflect && this[l] != null && this.initialReflectedProperties.set(l, this[l]);
      }
    ), It(this, P, !0)), super.attributeChangedCallback(t, e, o);
  }
  willUpdate(t) {
    super.willUpdate(t), this.initialReflectedProperties.forEach((e, o) => {
      t.has(o) && this[o] == null && (this[o] = e);
    });
  }
};
P = /* @__PURE__ */ new WeakMap();
g.version = "2.20.1";
g.dependencies = {};
a([
  i()
], g.prototype, "dir", 2);
a([
  i()
], g.prototype, "lang", 2);
var I = Symbol(), D = Symbol(), q, j = /* @__PURE__ */ new Map(), f = class extends g {
  constructor() {
    super(...arguments), this.initialRender = !1, this.svg = null, this.label = "", this.library = "default";
  }
  /** Given a URL, this function returns the resulting SVG element or an appropriate error symbol. */
  async resolveIcon(t, e) {
    var o;
    let r;
    if (e != null && e.spriteSheet)
      return this.svg = h`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`, this.svg;
    try {
      if (r = await fetch(t, { mode: "cors" }), !r.ok) return r.status === 410 ? I : D;
    } catch {
      return D;
    }
    try {
      const l = document.createElement("div");
      l.innerHTML = await r.text();
      const s = l.firstElementChild;
      if (((o = s == null ? void 0 : s.tagName) == null ? void 0 : o.toLowerCase()) !== "svg") return I;
      q || (q = new DOMParser());
      const p = q.parseFromString(s.outerHTML, "text/html").body.querySelector("svg");
      return p ? (p.part.add("svg"), document.adoptNode(p)) : I;
    } catch {
      return I;
    }
  }
  connectedCallback() {
    super.connectedCallback(), Nt(this);
  }
  firstUpdated() {
    this.initialRender = !0, this.setIcon();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), Rt(this);
  }
  getIconSource() {
    const t = st(this.library);
    return this.name && t ? {
      url: t.resolver(this.name),
      fromLibrary: !0
    } : {
      url: this.src,
      fromLibrary: !1
    };
  }
  handleLabelChange() {
    typeof this.label == "string" && this.label.length > 0 ? (this.setAttribute("role", "img"), this.setAttribute("aria-label", this.label), this.removeAttribute("aria-hidden")) : (this.removeAttribute("role"), this.removeAttribute("aria-label"), this.setAttribute("aria-hidden", "true"));
  }
  async setIcon() {
    var t;
    const { url: e, fromLibrary: o } = this.getIconSource(), r = o ? st(this.library) : void 0;
    if (!e) {
      this.svg = null;
      return;
    }
    let l = j.get(e);
    if (l || (l = this.resolveIcon(e, r), j.set(e, l)), !this.initialRender)
      return;
    const s = await l;
    if (s === D && j.delete(e), e === this.getIconSource().url) {
      if (wt(s)) {
        if (this.svg = s, r) {
          await this.updateComplete;
          const d = this.shadowRoot.querySelector("[part='svg']");
          typeof r.mutator == "function" && d && r.mutator(d);
        }
        return;
      }
      switch (s) {
        case D:
        case I:
          this.svg = null, this.emit("sl-error");
          break;
        default:
          this.svg = s.cloneNode(!0), (t = r == null ? void 0 : r.mutator) == null || t.call(r, this.svg), this.emit("sl-load");
      }
    }
  }
  render() {
    return this.svg;
  }
};
f.styles = [x, qt];
a([
  y()
], f.prototype, "svg", 2);
a([
  i({ reflect: !0 })
], f.prototype, "name", 2);
a([
  i()
], f.prototype, "src", 2);
a([
  i()
], f.prototype, "label", 2);
a([
  i({ reflect: !0 })
], f.prototype, "library", 2);
a([
  V("label")
], f.prototype, "handleLabelChange", 1);
a([
  V(["name", "src", "library"])
], f.prototype, "setIcon", 1);
var n = class extends g {
  constructor() {
    super(...arguments), this.formControlController = new pt(this, {
      assumeInteractionOn: ["sl-blur", "sl-input"]
    }), this.hasSlotController = new Y(this, "help-text", "label"), this.localize = new U(this), this.hasFocus = !1, this.title = "", this.__numberInput = Object.assign(document.createElement("input"), { type: "number" }), this.__dateInput = Object.assign(document.createElement("input"), { type: "date" }), this.type = "text", this.name = "", this.value = "", this.defaultValue = "", this.size = "medium", this.filled = !1, this.pill = !1, this.label = "", this.helpText = "", this.clearable = !1, this.disabled = !1, this.placeholder = "", this.readonly = !1, this.passwordToggle = !1, this.passwordVisible = !1, this.noSpinButtons = !1, this.form = "", this.required = !1, this.spellcheck = !0;
  }
  //
  // NOTE: We use an in-memory input for these getters/setters instead of the one in the template because the properties
  // can be set before the component is rendered.
  //
  /**
   * Gets or sets the current value as a `Date` object. Returns `null` if the value can't be converted. This will use the native `<input type="{{type}}">` implementation and may result in an error.
   */
  get valueAsDate() {
    var t;
    return this.__dateInput.type = this.type, this.__dateInput.value = this.value, ((t = this.input) == null ? void 0 : t.valueAsDate) || this.__dateInput.valueAsDate;
  }
  set valueAsDate(t) {
    this.__dateInput.type = this.type, this.__dateInput.valueAsDate = t, this.value = this.__dateInput.value;
  }
  /** Gets or sets the current value as a number. Returns `NaN` if the value can't be converted. */
  get valueAsNumber() {
    var t;
    return this.__numberInput.value = this.value, ((t = this.input) == null ? void 0 : t.valueAsNumber) || this.__numberInput.valueAsNumber;
  }
  set valueAsNumber(t) {
    this.__numberInput.valueAsNumber = t, this.value = this.__numberInput.value;
  }
  /** Gets the validity state object */
  get validity() {
    return this.input.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.input.validationMessage;
  }
  firstUpdated() {
    this.formControlController.updateValidity();
  }
  handleBlur() {
    this.hasFocus = !1, this.emit("sl-blur");
  }
  handleChange() {
    this.value = this.input.value, this.emit("sl-change");
  }
  handleClearClick(t) {
    t.preventDefault(), this.value !== "" && (this.value = "", this.emit("sl-clear"), this.emit("sl-input"), this.emit("sl-change")), this.input.focus();
  }
  handleFocus() {
    this.hasFocus = !0, this.emit("sl-focus");
  }
  handleInput() {
    this.value = this.input.value, this.formControlController.updateValidity(), this.emit("sl-input");
  }
  handleInvalid(t) {
    this.formControlController.setValidity(!1), this.formControlController.emitInvalidEvent(t);
  }
  handleKeyDown(t) {
    const e = t.metaKey || t.ctrlKey || t.shiftKey || t.altKey;
    t.key === "Enter" && !e && setTimeout(() => {
      !t.defaultPrevented && !t.isComposing && this.formControlController.submit();
    });
  }
  handlePasswordToggle() {
    this.passwordVisible = !this.passwordVisible;
  }
  handleDisabledChange() {
    this.formControlController.setValidity(this.disabled);
  }
  handleStepChange() {
    this.input.step = String(this.step), this.formControlController.updateValidity();
  }
  async handleValueChange() {
    await this.updateComplete, this.formControlController.updateValidity();
  }
  /** Sets focus on the input. */
  focus(t) {
    this.input.focus(t);
  }
  /** Removes focus from the input. */
  blur() {
    this.input.blur();
  }
  /** Selects all the text in the input. */
  select() {
    this.input.select();
  }
  /** Sets the start and end positions of the text selection (0-based). */
  setSelectionRange(t, e, o = "none") {
    this.input.setSelectionRange(t, e, o);
  }
  /** Replaces a range of text with a new string. */
  setRangeText(t, e, o, r = "preserve") {
    const l = e ?? this.input.selectionStart, s = o ?? this.input.selectionEnd;
    this.input.setRangeText(t, l, s, r), this.value !== this.input.value && (this.value = this.input.value);
  }
  /** Displays the browser picker for an input element (only works if the browser supports it for the input type). */
  showPicker() {
    "showPicker" in HTMLInputElement.prototype && this.input.showPicker();
  }
  /** Increments the value of a numeric input type by the value of the step attribute. */
  stepUp() {
    this.input.stepUp(), this.value !== this.input.value && (this.value = this.input.value);
  }
  /** Decrements the value of a numeric input type by the value of the step attribute. */
  stepDown() {
    this.input.stepDown(), this.value !== this.input.value && (this.value = this.input.value);
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.input.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.input.reportValidity();
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(t) {
    this.input.setCustomValidity(t), this.formControlController.updateValidity();
  }
  render() {
    const t = this.hasSlotController.test("label"), e = this.hasSlotController.test("help-text"), o = this.label ? !0 : !!t, r = this.helpText ? !0 : !!e, s = this.clearable && !this.disabled && !this.readonly && (typeof this.value == "number" || this.value.length > 0);
    return h`
      <div
        part="form-control"
        class=${z({
      "form-control": !0,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-label": o,
      "form-control--has-help-text": r
    })}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o ? "false" : "true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${z({
      input: !0,
      // Sizes
      "input--small": this.size === "small",
      "input--medium": this.size === "medium",
      "input--large": this.size === "large",
      // States
      "input--pill": this.pill,
      "input--standard": !this.filled,
      "input--filled": this.filled,
      "input--disabled": this.disabled,
      "input--focused": this.hasFocus,
      "input--empty": !this.value,
      "input--no-spin-buttons": this.noSpinButtons
    })}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type === "password" && this.passwordVisible ? "text" : this.type}
              title=${this.title}
              name=${u(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${u(this.placeholder)}
              minlength=${u(this.minlength)}
              maxlength=${u(this.maxlength)}
              min=${u(this.min)}
              max=${u(this.max)}
              step=${u(this.step)}
              .value=${_t(this.value)}
              autocapitalize=${u(this.autocapitalize)}
              autocomplete=${u(this.autocomplete)}
              autocorrect=${u(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${u(this.pattern)}
              enterkeyhint=${u(this.enterkeyhint)}
              inputmode=${u(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${s ? h`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                ` : ""}
            ${this.passwordToggle && !this.disabled ? h`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible ? "hidePassword" : "showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible ? h`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        ` : h`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                ` : ""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
n.styles = [x, Ct, xt];
n.dependencies = { "sl-icon": f };
a([
  G(".input__control")
], n.prototype, "input", 2);
a([
  y()
], n.prototype, "hasFocus", 2);
a([
  i()
], n.prototype, "title", 2);
a([
  i({ reflect: !0 })
], n.prototype, "type", 2);
a([
  i()
], n.prototype, "name", 2);
a([
  i()
], n.prototype, "value", 2);
a([
  kt()
], n.prototype, "defaultValue", 2);
a([
  i({ reflect: !0 })
], n.prototype, "size", 2);
a([
  i({ type: Boolean, reflect: !0 })
], n.prototype, "filled", 2);
a([
  i({ type: Boolean, reflect: !0 })
], n.prototype, "pill", 2);
a([
  i()
], n.prototype, "label", 2);
a([
  i({ attribute: "help-text" })
], n.prototype, "helpText", 2);
a([
  i({ type: Boolean })
], n.prototype, "clearable", 2);
a([
  i({ type: Boolean, reflect: !0 })
], n.prototype, "disabled", 2);
a([
  i()
], n.prototype, "placeholder", 2);
a([
  i({ type: Boolean, reflect: !0 })
], n.prototype, "readonly", 2);
a([
  i({ attribute: "password-toggle", type: Boolean })
], n.prototype, "passwordToggle", 2);
a([
  i({ attribute: "password-visible", type: Boolean })
], n.prototype, "passwordVisible", 2);
a([
  i({ attribute: "no-spin-buttons", type: Boolean })
], n.prototype, "noSpinButtons", 2);
a([
  i({ reflect: !0 })
], n.prototype, "form", 2);
a([
  i({ type: Boolean, reflect: !0 })
], n.prototype, "required", 2);
a([
  i()
], n.prototype, "pattern", 2);
a([
  i({ type: Number })
], n.prototype, "minlength", 2);
a([
  i({ type: Number })
], n.prototype, "maxlength", 2);
a([
  i()
], n.prototype, "min", 2);
a([
  i()
], n.prototype, "max", 2);
a([
  i()
], n.prototype, "step", 2);
a([
  i()
], n.prototype, "autocapitalize", 2);
a([
  i()
], n.prototype, "autocorrect", 2);
a([
  i()
], n.prototype, "autocomplete", 2);
a([
  i({ type: Boolean })
], n.prototype, "autofocus", 2);
a([
  i()
], n.prototype, "enterkeyhint", 2);
a([
  i({
    type: Boolean,
    converter: {
      // Allow "true|false" attribute values but keep the property boolean
      fromAttribute: (t) => !(!t || t === "false"),
      toAttribute: (t) => t ? "true" : "false"
    }
  })
], n.prototype, "spellcheck", 2);
a([
  i()
], n.prototype, "inputmode", 2);
a([
  V("disabled", { waitUntilFirstUpdate: !0 })
], n.prototype, "handleDisabledChange", 1);
a([
  V("step", { waitUntilFirstUpdate: !0 })
], n.prototype, "handleStepChange", 1);
a([
  V("value", { waitUntilFirstUpdate: !0 })
], n.prototype, "handleValueChange", 1);
n.define("sl-input");
var jt = m`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`, vt = class extends g {
  constructor() {
    super(...arguments), this.localize = new U(this);
  }
  render() {
    return h`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `;
  }
};
vt.styles = [x, jt];
var Ht = m`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`, c = class extends g {
  constructor() {
    super(...arguments), this.formControlController = new pt(this, {
      assumeInteractionOn: ["click"]
    }), this.hasSlotController = new Y(this, "[default]", "prefix", "suffix"), this.localize = new U(this), this.hasFocus = !1, this.invalid = !1, this.title = "", this.variant = "default", this.size = "medium", this.caret = !1, this.disabled = !1, this.loading = !1, this.outline = !1, this.pill = !1, this.circle = !1, this.type = "button", this.name = "", this.value = "", this.href = "", this.rel = "noreferrer noopener";
  }
  /** Gets the validity state object */
  get validity() {
    return this.isButton() ? this.button.validity : X;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.isButton() ? this.button.validationMessage : "";
  }
  firstUpdated() {
    this.isButton() && this.formControlController.updateValidity();
  }
  handleBlur() {
    this.hasFocus = !1, this.emit("sl-blur");
  }
  handleFocus() {
    this.hasFocus = !0, this.emit("sl-focus");
  }
  handleClick() {
    this.type === "submit" && this.formControlController.submit(this), this.type === "reset" && this.formControlController.reset(this);
  }
  handleInvalid(t) {
    this.formControlController.setValidity(!1), this.formControlController.emitInvalidEvent(t);
  }
  isButton() {
    return !this.href;
  }
  isLink() {
    return !!this.href;
  }
  handleDisabledChange() {
    this.isButton() && this.formControlController.setValidity(this.disabled);
  }
  /** Simulates a click on the button. */
  click() {
    this.button.click();
  }
  /** Sets focus on the button. */
  focus(t) {
    this.button.focus(t);
  }
  /** Removes focus from the button. */
  blur() {
    this.button.blur();
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.isButton() ? this.button.checkValidity() : !0;
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.isButton() ? this.button.reportValidity() : !0;
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(t) {
    this.isButton() && (this.button.setCustomValidity(t), this.formControlController.updateValidity());
  }
  render() {
    const t = this.isLink(), e = t ? T`a` : T`button`;
    return O`
      <${e}
        part="base"
        class=${z({
      button: !0,
      "button--default": this.variant === "default",
      "button--primary": this.variant === "primary",
      "button--success": this.variant === "success",
      "button--neutral": this.variant === "neutral",
      "button--warning": this.variant === "warning",
      "button--danger": this.variant === "danger",
      "button--text": this.variant === "text",
      "button--small": this.size === "small",
      "button--medium": this.size === "medium",
      "button--large": this.size === "large",
      "button--caret": this.caret,
      "button--circle": this.circle,
      "button--disabled": this.disabled,
      "button--focused": this.hasFocus,
      "button--loading": this.loading,
      "button--standard": !this.outline,
      "button--outline": this.outline,
      "button--pill": this.pill,
      "button--rtl": this.localize.dir() === "rtl",
      "button--has-label": this.hasSlotController.test("[default]"),
      "button--has-prefix": this.hasSlotController.test("prefix"),
      "button--has-suffix": this.hasSlotController.test("suffix")
    })}
        ?disabled=${u(t ? void 0 : this.disabled)}
        type=${u(t ? void 0 : this.type)}
        title=${this.title}
        name=${u(t ? void 0 : this.name)}
        value=${u(t ? void 0 : this.value)}
        href=${u(t && !this.disabled ? this.href : void 0)}
        target=${u(t ? this.target : void 0)}
        download=${u(t ? this.download : void 0)}
        rel=${u(t ? this.rel : void 0)}
        role=${u(t ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton() ? this.handleInvalid : null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret ? O` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> ` : ""}
        ${this.loading ? O`<sl-spinner part="spinner"></sl-spinner>` : ""}
      </${e}>
    `;
  }
};
c.styles = [x, Ht];
c.dependencies = {
  "sl-icon": f,
  "sl-spinner": vt
};
a([
  G(".button")
], c.prototype, "button", 2);
a([
  y()
], c.prototype, "hasFocus", 2);
a([
  y()
], c.prototype, "invalid", 2);
a([
  i()
], c.prototype, "title", 2);
a([
  i({ reflect: !0 })
], c.prototype, "variant", 2);
a([
  i({ reflect: !0 })
], c.prototype, "size", 2);
a([
  i({ type: Boolean, reflect: !0 })
], c.prototype, "caret", 2);
a([
  i({ type: Boolean, reflect: !0 })
], c.prototype, "disabled", 2);
a([
  i({ type: Boolean, reflect: !0 })
], c.prototype, "loading", 2);
a([
  i({ type: Boolean, reflect: !0 })
], c.prototype, "outline", 2);
a([
  i({ type: Boolean, reflect: !0 })
], c.prototype, "pill", 2);
a([
  i({ type: Boolean, reflect: !0 })
], c.prototype, "circle", 2);
a([
  i()
], c.prototype, "type", 2);
a([
  i()
], c.prototype, "name", 2);
a([
  i()
], c.prototype, "value", 2);
a([
  i()
], c.prototype, "href", 2);
a([
  i()
], c.prototype, "target", 2);
a([
  i()
], c.prototype, "rel", 2);
a([
  i()
], c.prototype, "download", 2);
a([
  i()
], c.prototype, "form", 2);
a([
  i({ attribute: "formaction" })
], c.prototype, "formAction", 2);
a([
  i({ attribute: "formenctype" })
], c.prototype, "formEnctype", 2);
a([
  i({ attribute: "formmethod" })
], c.prototype, "formMethod", 2);
a([
  i({ attribute: "formnovalidate", type: Boolean })
], c.prototype, "formNoValidate", 2);
a([
  i({ attribute: "formtarget" })
], c.prototype, "formTarget", 2);
a([
  V("disabled", { waitUntilFirstUpdate: !0 })
], c.prototype, "handleDisabledChange", 1);
c.define("sl-button");
var Wt = m`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`, yt = class extends g {
  constructor() {
    super(...arguments), this.hasSlotController = new Y(this, "footer", "header", "image");
  }
  render() {
    return h`
      <div
        part="base"
        class=${z({
      card: !0,
      "card--has-footer": this.hasSlotController.test("footer"),
      "card--has-image": this.hasSlotController.test("image"),
      "card--has-header": this.hasSlotController.test("header")
    })}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `;
  }
};
yt.styles = [x, Wt];
yt.define("sl-card");
var Kt = m`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`, Qt = m`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`, b = class extends g {
  constructor() {
    super(...arguments), this.hasFocus = !1, this.label = "", this.disabled = !1;
  }
  handleBlur() {
    this.hasFocus = !1, this.emit("sl-blur");
  }
  handleFocus() {
    this.hasFocus = !0, this.emit("sl-focus");
  }
  handleClick(t) {
    this.disabled && (t.preventDefault(), t.stopPropagation());
  }
  /** Simulates a click on the icon button. */
  click() {
    this.button.click();
  }
  /** Sets focus on the icon button. */
  focus(t) {
    this.button.focus(t);
  }
  /** Removes focus from the icon button. */
  blur() {
    this.button.blur();
  }
  render() {
    const t = !!this.href, e = t ? T`a` : T`button`;
    return O`
      <${e}
        part="base"
        class=${z({
      "icon-button": !0,
      "icon-button--disabled": !t && this.disabled,
      "icon-button--focused": this.hasFocus
    })}
        ?disabled=${u(t ? void 0 : this.disabled)}
        type=${u(t ? void 0 : "button")}
        href=${u(t ? this.href : void 0)}
        target=${u(t ? this.target : void 0)}
        download=${u(t ? this.download : void 0)}
        rel=${u(t && this.target ? "noreferrer noopener" : void 0)}
        role=${u(t ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-label="${this.label}"
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${u(this.name)}
          library=${u(this.library)}
          src=${u(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `;
  }
};
b.styles = [x, Qt];
b.dependencies = { "sl-icon": f };
a([
  G(".icon-button")
], b.prototype, "button", 2);
a([
  y()
], b.prototype, "hasFocus", 2);
a([
  i()
], b.prototype, "name", 2);
a([
  i()
], b.prototype, "library", 2);
a([
  i()
], b.prototype, "src", 2);
a([
  i()
], b.prototype, "href", 2);
a([
  i()
], b.prototype, "target", 2);
a([
  i()
], b.prototype, "download", 2);
a([
  i()
], b.prototype, "label", 2);
a([
  i({ type: Boolean, reflect: !0 })
], b.prototype, "disabled", 2);
var k = class extends g {
  constructor() {
    super(...arguments), this.localize = new U(this), this.variant = "neutral", this.size = "medium", this.pill = !1, this.removable = !1;
  }
  handleRemoveClick() {
    this.emit("sl-remove");
  }
  render() {
    return h`
      <span
        part="base"
        class=${z({
      tag: !0,
      // Types
      "tag--primary": this.variant === "primary",
      "tag--success": this.variant === "success",
      "tag--neutral": this.variant === "neutral",
      "tag--warning": this.variant === "warning",
      "tag--danger": this.variant === "danger",
      "tag--text": this.variant === "text",
      // Sizes
      "tag--small": this.size === "small",
      "tag--medium": this.size === "medium",
      "tag--large": this.size === "large",
      // Modifiers
      "tag--pill": this.pill,
      "tag--removable": this.removable
    })}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable ? h`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            ` : ""}
      </span>
    `;
  }
};
k.styles = [x, Kt];
k.dependencies = { "sl-icon-button": b };
a([
  i({ reflect: !0 })
], k.prototype, "variant", 2);
a([
  i({ reflect: !0 })
], k.prototype, "size", 2);
a([
  i({ type: Boolean, reflect: !0 })
], k.prototype, "pill", 2);
a([
  i({ type: Boolean })
], k.prototype, "removable", 2);
k.define("sl-tag");
f.define("sl-icon");
var Zt = Object.defineProperty, Gt = Object.getOwnPropertyDescriptor, N = (t, e, o, r) => {
  for (var l = r > 1 ? void 0 : r ? Gt(e, o) : e, s = t.length - 1, d; s >= 0; s--)
    (d = t[s]) && (l = (r ? d(e, o, l) : d(l)) || l);
  return r && l && Zt(e, o, l), l;
};
let S = class extends Z {
  constructor() {
    super(...arguments), this.searchQuery = "", this.servers = [], this.loading = !1;
  }
  async firstUpdated() {
    await this.fetchServers();
  }
  async fetchServers() {
    this.loading = !0;
    try {
      const t = "http://localhost:3000/api/mcp", e = this.searchQuery ? `${t}?q=${encodeURIComponent(this.searchQuery)}` : t, o = await fetch(e);
      if (!o.ok) throw new Error("Failed to fetch servers");
      this.servers = await o.json();
    } catch (t) {
      console.error(t);
    } finally {
      this.loading = !1;
    }
  }
  handleSearch(t) {
    this.searchQuery = t.target.value, this.fetchServers();
  }
  getMcpConfig(t) {
    const e = {
      mcpServers: {
        [t.name]: {
          command: t.command,
          args: t.args,
          env: t.env
        }
      }
    };
    return JSON.stringify(e, null, 2);
  }
  copyToClipboard(t) {
    navigator.clipboard.writeText(t), alert("Copied to clipboard!");
  }
  render() {
    return h`
      <div class="header">
        <h1>MCP Directory 2100</h1>
        <div class="subtitle">Neural Interface for Model Context Protocol</div>
      </div>

      <div class="search-container">
        <sl-input
          placeholder="Search servers..."
          size="large"
          clearable
          @sl-input=${this.handleSearch}
        >
          <sl-icon name="search" slot="prefix"></sl-icon>
        </sl-input>
      </div>

      <div class="results">
        ${this.loading ? h`<p>Loading...</p>` : this.servers.map(
      (t) => h`
                <sl-card>
                  <div slot="header">
                    ${t.logoUrl ? h`<img src="${t.logoUrl}" alt="${t.name}" class="logo" />` : h`<sl-icon name="box" style="font-size: 2rem;"></sl-icon>`}
                    <span class="server-name">${t.name}</span>
                  </div>

                  <div class="description">${t.description}</div>

                  <sl-button variant="primary" outline style="width: 100%" @click=${() => this.copyToClipboard(this.getMcpConfig(t))}>
                    <sl-icon name="copy" slot="prefix"></sl-icon>
                    Copy Config
                  </sl-button>
                  
                  <div class="code-block">
                    ${this.getMcpConfig(t)}
                  </div>
                </sl-card>
              `
    )}
      </div>
    `;
  }
};
S.styles = m`
    :host {
      display: block;
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 20px;
      font-family: var(--sl-font-sans);
    }

    .header {
      text-align: center;
      margin-bottom: 60px;
      position: relative;
    }

    .header::after {
      content: '';
      position: absolute;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 2px;
      background: var(--brand-primary);
      box-shadow: 0 0 10px var(--brand-primary);
    }

    h1 {
      font-size: 3.5rem;
      color: var(--sl-color-neutral-950);
      margin-bottom: 0.5rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      text-shadow: 0 0 20px rgba(0, 243, 255, 0.4);
    }
    
    .subtitle {
      color: var(--brand-primary);
      font-size: 1.2rem;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    .search-container {
      margin-bottom: 50px;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    sl-input::part(base) {
      background: rgba(0, 0, 0, 0.3);
      border-color: var(--sl-color-primary-800);
      backdrop-filter: blur(5px);
    }

    sl-input::part(base):focus-within {
      border-color: var(--brand-primary);
      box-shadow: 0 0 15px rgba(0, 243, 255, 0.2);
    }

    .results {
      display: grid;
      gap: 30px;
      grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    }

    /* Holographic Card Styles */
    sl-card {
      height: 100%;
      --border-radius: 12px;
      border: none;
      background: transparent;
    }

    sl-card::part(base) {
      background: var(--brand-bg-panel);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(0, 243, 255, 0.15);
      box-shadow: 
        0 4px 6px -1px rgba(0, 0, 0, 0.3), 
        0 0 15px rgba(0, 243, 255, 0.05);
      transition: all 0.3s ease;
    }

    sl-card:hover::part(base) {
      border-color: rgba(0, 243, 255, 0.5);
      box-shadow: 
        0 10px 20px -3px rgba(0, 0, 0, 0.4),
        0 0 25px rgba(0, 243, 255, 0.2);
      transform: translateY(-5px);
    }

    sl-card [slot='header'] {
      display: flex;
      align-items: center;
      gap: 15px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding-bottom: 15px;
    }

    .logo {
      width: 48px;
      height: 48px;
      object-fit: contain;
      border-radius: 8px;
      background: rgba(255,255,255,0.05);
      padding: 4px;
    }

    .server-name {
      font-weight: 700;
      font-size: 1.25rem;
      color: var(--sl-color-neutral-1000);
      letter-spacing: 0.5px;
    }

    .description {
      color: var(--sl-color-neutral-400); /* Will rely on shoelace dark theme neutral-400 equivalent which is light grey */
      margin-bottom: 1.5rem;
      line-height: 1.6;
      font-weight: 300;
      color: var(--sl-color-neutral-300); /* Actually shoelace dark theme inverts this? Let's use specific color */
      color: #b0b0d0;
    }

    .code-block {
      background: rgba(0, 0, 0, 0.4);
      padding: 15px;
      border-radius: 8px;
      font-family: 'Consolas', 'Monaco', monospace;
      font-size: 0.85rem;
      margin-top: 1.5rem;
      position: relative;
      overflow-x: auto;
      border: 1px solid rgba(255, 255, 255, 0.05);
      color: #a5f3fc;
    }

    sl-button[variant="primary"]::part(base) {
      background: rgba(0, 243, 255, 0.1);
      border-color: var(--brand-primary);
      color: var(--brand-primary);
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 600;
      transition: all 0.3s ease;
    }

    sl-button[variant="primary"]:hover::part(base) {
      background: var(--brand-primary);
      color: #000;
      box-shadow: 0 0 20px var(--brand-primary);
    }
  `;
N([
  y()
], S.prototype, "searchQuery", 2);
N([
  y()
], S.prototype, "servers", 2);
N([
  y()
], S.prototype, "loading", 2);
S = N([
  nt("mcp-search")
], S);
var Xt = Object.getOwnPropertyDescriptor, Yt = (t, e, o, r) => {
  for (var l = r > 1 ? void 0 : r ? Xt(e, o) : e, s = t.length - 1, d; s >= 0; s--)
    (d = t[s]) && (l = d(l) || l);
  return l;
};
let Q = class extends Z {
  render() {
    return h`
      <mcp-search></mcp-search>
    `;
  }
};
Q.styles = m`
    :host {
      display: block;
      padding: 16px;
    }
  `;
Q = Yt([
  nt("app-shell")
], Q);
export {
  Q as AppShell
};
