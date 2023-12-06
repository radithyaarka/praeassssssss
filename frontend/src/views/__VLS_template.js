import Menu from '@/components/Menu.vue';
import Navbar from '@/components/Navbar.vue';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './MenuView.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'Navbar', typeof __VLS_localComponents, "Navbar", "Navbar", "Navbar"> &
__VLS_WithComponent<'Menu', typeof __VLS_localComponents, "Menu", "Menu", "Menu">;
({} as __VLS_IntrinsicElements).head; ({} as __VLS_IntrinsicElements).head;
({} as __VLS_IntrinsicElements).link;
__VLS_components.Navbar;
// @ts-ignore
[Navbar,];
({} as __VLS_IntrinsicElements).body; ({} as __VLS_IntrinsicElements).body;
__VLS_components.Menu;
// @ts-ignore
[Menu,];
{
const __VLS_0 = ({} as __VLS_IntrinsicElements)["head"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
({} as __VLS_IntrinsicElements).head;
({} as __VLS_IntrinsicElements).head;
const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = ({} as __VLS_IntrinsicElements)["link"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
({} as __VLS_IntrinsicElements).link;
const __VLS_7 = __VLS_6({ ...{}, rel: ("stylesheet"), href: ("../assets/menu.css"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, rel: ("stylesheet"), href: ("../assets/menu.css"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
}
(__VLS_3.slots!).default;
}
{
let __VLS_10!: 'Navbar' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Navbar : (typeof __VLS_resolvedLocalAndGlobalComponents)['Navbar'];
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, }));
({} as { Navbar: typeof __VLS_10; }).Navbar;
const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
}
{
const __VLS_15 = ({} as __VLS_IntrinsicElements)["body"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
({} as __VLS_IntrinsicElements).body;
({} as __VLS_IntrinsicElements).body;
const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
{
let __VLS_20!: 'Menu' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Menu : (typeof __VLS_resolvedLocalAndGlobalComponents)['Menu'];
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, }));
({} as { Menu: typeof __VLS_20; }).Menu;
const __VLS_22 = __VLS_21({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
}
(__VLS_18.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
return __VLS_slots;
}
