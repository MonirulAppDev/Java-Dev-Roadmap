import{c as M,u as z,r as i,j as e,h as P,C as D}from"./index-DwYA3RQs.js";import{C as F}from"./chevron-down-DRnBFj5w.js";import{C as O,a as J}from"./copy-Als0-svY.js";import{P as y}from"./play-B8M0bEl-.js";import{T as _}from"./trash-2-D5dreAjY.js";/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=M("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]),S=[{label:"Hello World",code:`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java! ☕");
        System.out.println("Welcome to JavaPath!");
    }
}`},{label:"Variables & Types",code:`public class Main {
    public static void main(String[] args) {
        int age = 25;
        double salary = 75000.50;
        String name = "Java Learner";
        boolean isLearning = true;
        
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Salary: $" + salary);
        System.out.println("Learning: " + isLearning);
    }
}`},{label:"For Loop",code:`public class Main {
    public static void main(String[] args) {
        // Print multiplication table of 5
        System.out.println("Multiplication Table of 5:");
        for (int i = 1; i <= 10; i++) {
            System.out.println("5 × " + i + " = " + (5 * i));
        }
    }
}`},{label:"OOP Example",code:`public class Main {
    // A simple class
    static class Animal {
        String name;
        String sound;
        
        Animal(String name, String sound) {
            this.name = name;
            this.sound = sound;
        }
        
        void speak() {
            System.out.println(name + " says: " + sound);
        }
    }
    
    public static void main(String[] args) {
        Animal dog = new Animal("Dog", "Woof!");
        Animal cat = new Animal("Cat", "Meow!");
        Animal duck = new Animal("Duck", "Quack!");
        
        dog.speak();
        cat.speak();
        duck.speak();
    }
}`},{label:"ArrayList",code:`import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Cherry");
        fruits.add("Mango");
        
        System.out.println("Fruits list: " + fruits);
        System.out.println("Size: " + fruits.size());
        
        // Loop through
        for (String fruit : fruits) {
            System.out.println("🍎 " + fruit);
        }
        
        fruits.remove("Banana");
        System.out.println("After removing Banana: " + fruits);
    }
}`},{label:"Fibonacci",code:`public class Main {
    static int fibonacci(int n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    
    public static void main(String[] args) {
        System.out.println("Fibonacci Sequence:");
        for (int i = 0; i < 10; i++) {
            System.out.print(fibonacci(i));
            if (i < 9) System.out.print(", ");
        }
        System.out.println();
    }
}`}],N=S[0].code,B=async c=>{var r,l,u,o,d;try{const a=await fetch("https://emkc.org/api/v2/piston/execute",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({language:"java",version:"15.0.2",files:[{name:"Main.java",content:c}],stdin:"",args:[],compile_timeout:1e4,run_timeout:5e3})});if(!a.ok)throw new Error("API error");const t=await a.json();return(r=t.compile)!=null&&r.stderr?{output:"",error:t.compile.stderr,success:!1}:(l=t.run)!=null&&l.stderr&&!((u=t.run)!=null&&u.stdout)?{output:"",error:t.run.stderr,success:!1}:{output:((o=t.run)==null?void 0:o.stdout)||"",error:((d=t.run)==null?void 0:d.stderr)||"",success:!0}}catch(a){return{output:"",error:`Cannot connect to execution service.
${a.message}

Tip: Make sure you have internet access.`,success:!1}}},Q=()=>{const{t:c}=z(),[r,l]=i.useState(N),[u,o]=i.useState(""),[d,a]=i.useState(""),[t,f]=i.useState(!1),[C,b]=i.useState(!1),[p,x]=i.useState(!1),[g,h]=i.useState(null),m=i.useRef(null),j=i.useRef(null),k=()=>{j.current&&m.current&&(j.current.scrollTop=m.current.scrollTop)},w=r.split(`
`).length,v=async()=>{f(!0),o(""),a("");const s=Date.now(),n=await B(r);h(Date.now()-s),n.success?(o(n.output||"(No output)"),a(n.error||"")):a(n.error),f(!1)},A=async()=>{await navigator.clipboard.writeText(r),b(!0),setTimeout(()=>b(!1),2e3)},R=()=>{l(N),o(""),a(""),h(null)},T=s=>{if(s.key==="Tab"){s.preventDefault();const n=s.target.selectionStart,E=s.target.selectionEnd,L=r.substring(0,n)+"    "+r.substring(E);l(L),setTimeout(()=>{m.current.selectionStart=n+4,m.current.selectionEnd=n+4},0)}(s.ctrlKey||s.metaKey)&&s.key==="Enter"&&v()};return e.jsxs("div",{className:"code-runner-page",children:[e.jsxs("div",{className:"code-runner-header animate-fade-in-up",children:[e.jsxs("div",{className:"code-runner-title-area",children:[e.jsx("div",{className:"terminal-icon",children:e.jsx(P,{size:24})}),e.jsxs("div",{children:[e.jsx("h1",{className:"section-title",children:c("codeRunner.title")}),e.jsx("p",{className:"section-subtitle",children:c("codeRunner.subtitle")})]})]}),e.jsxs("div",{className:"code-runner-actions",children:[e.jsxs("div",{className:"examples-dropdown-wrapper",children:[e.jsxs("button",{className:"btn btn-secondary",onClick:()=>x(!p),children:[e.jsx(D,{size:16}),"Examples",e.jsx(F,{size:14})]}),p&&e.jsx("div",{className:"examples-dropdown",children:S.map((s,n)=>e.jsx("button",{className:"example-item",onClick:()=>{l(s.code),x(!1),o(""),a("")},children:s.label},n))})]}),e.jsx("button",{className:"btn btn-secondary",onClick:A,children:C?e.jsxs(e.Fragment,{children:[e.jsx(O,{size:16})," Copied!"]}):e.jsxs(e.Fragment,{children:[e.jsx(J,{size:16})," Copy"]})}),e.jsx("button",{className:"btn btn-secondary",onClick:R,title:"Reset",children:e.jsx(W,{size:16})}),e.jsx("button",{className:"btn btn-primary run-btn",onClick:v,disabled:t,children:t?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner"})," Running..."]}):e.jsxs(e.Fragment,{children:[e.jsx(y,{size:16})," ",c("codeRunner.run")," ",e.jsx("span",{className:"shortcut-hint",children:"Ctrl+↵"})]})})]})]}),e.jsxs("div",{className:"code-runner-workspace",children:[e.jsxs("div",{className:"editor-panel",children:[e.jsxs("div",{className:"editor-toolbar",children:[e.jsxs("div",{className:"editor-dots",children:[e.jsx("span",{className:"dot dot-red"}),e.jsx("span",{className:"dot dot-yellow"}),e.jsx("span",{className:"dot dot-green"})]}),e.jsx("span",{className:"editor-lang",children:"Main.java"})]}),e.jsxs("div",{className:"editor-body",children:[e.jsx("div",{className:"line-numbers",ref:j,children:Array.from({length:w},(s,n)=>e.jsx("div",{className:"line-number",children:n+1},n))}),e.jsx("textarea",{ref:m,className:"code-textarea",value:r,onChange:s=>l(s.target.value),onKeyDown:T,onScroll:k,spellCheck:!1,autoCapitalize:"none",autoCorrect:"off",placeholder:"Write your Java code here..."})]})]}),e.jsxs("div",{className:"output-panel",children:[e.jsxs("div",{className:"output-toolbar",children:[e.jsxs("div",{className:"editor-dots",children:[e.jsx("span",{className:"dot dot-red"}),e.jsx("span",{className:"dot dot-yellow"}),e.jsx("span",{className:"dot dot-green"})]}),e.jsx("span",{className:"editor-lang",children:"Output"}),g!==null&&e.jsxs("span",{className:"run-time",children:[g,"ms"]}),(u||d)&&e.jsx("button",{className:"btn-icon",onClick:()=>{o(""),a(""),h(null)},style:{marginLeft:"auto"},children:e.jsx(_,{size:14})})]}),e.jsxs("div",{className:"output-body",children:[t&&e.jsxs("div",{className:"running-indicator",children:[e.jsxs("div",{className:"running-dots",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),e.jsx("span",{children:"Executing Java code..."})]}),!t&&!u&&!d&&e.jsxs("div",{className:"output-placeholder",children:[e.jsx(y,{size:32}),e.jsx("p",{children:c("codeRunner.noOutput")}),e.jsxs("span",{children:["Press ",e.jsx("kbd",{children:"Ctrl+Enter"})," or click Run"]})]}),!t&&u&&e.jsxs("div",{className:"output-success",children:[e.jsx("div",{className:"output-badge success",children:"✓ Success"}),e.jsx("pre",{className:"output-text",children:u})]}),!t&&d&&e.jsxs("div",{className:"output-error",children:[e.jsx("div",{className:"output-badge error",children:"⚠ Error"}),e.jsx("pre",{className:"output-text error-text",children:d})]})]}),e.jsx("div",{className:"output-footer",children:e.jsxs("span",{children:["☕ ",c("codeRunner.disclaimer")]})})]})]}),p&&e.jsx("div",{className:"backdrop",onClick:()=>x(!1)})]})};export{Q as default};
