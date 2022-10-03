import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

export const routes: RouteRecordRaw[] = [
    {
        path: '/budgets',
        component: () => import('../views/BudgetsView.vue'),
        name: 'Budgets',
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: ':budgetKey',
                component: () => import('../views/BudgetDetailed.vue'),
                name: 'BudgetDetailed',
                props: true
            },
            {
                path: ':budgetKey/transactions',
                component: () => import('../views/BudgetTransactionsDetailed.vue'),
                name: 'BudgetTransactionsDetailed',
                props: true
            },
        ]
    },
    {
        path: '/login',
        component: () => import( '../views/LoginView.vue'),
        name: 'Login',
        meta: {
            hidden: true
        }
    },
    {
        path: '/logout',
        component: () => import( '../views/LogoutView.vue'),
        name: 'Logout',
        meta: {
            hidden: true
        }
    },
]

// TODO: redirect to login if user accesses wrong page by url

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// TODO: beforeeach -> check if we have user info

export default router;
