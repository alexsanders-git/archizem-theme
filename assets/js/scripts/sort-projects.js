document.addEventListener('DOMContentLoaded', () => {
	const projectsType = document.querySelectorAll('.projects-type-button')

	if (projectsType.length > 0) {
		const projectsWrapper = document.querySelector('.projects-list');
		const alertBlock = document.querySelector('.alert');

		if (!projectsWrapper) return;

		projectsType.forEach(item => {
			item.addEventListener('click', async e => {
				e.preventDefault();

				if (item.classList.contains('active')) return;

				alertBlock.classList.remove('alert-error', 'show');

				// Remove the 'active' class from all elements
				projectsType.forEach((el) => el.classList.remove('active'));

				const type = item.dataset.type;
				const data = new FormData();

				data.append('action', 'sort_projects_by_type');
				data.append('type', type);

				projectsWrapper.classList.add('loading');

				try {
					const response = await fetch('/wp-admin/admin-ajax.php', {
						method: 'POST',
						body: data,
						credentials: 'same-origin',
					});

					if (!response.ok) {
						throw new Error('Unable to fetch data');
					}

					const result = await response.json();

					if (result.post_markup) {
						projectsWrapper.innerHTML = result.post_markup;
					}
				} catch (error) {
					alertBlock.innerHTML = error;
					alertBlock.classList.add('alert-error', 'show');

					console.error(error);
				} finally {
					projectsWrapper.classList.remove('loading');
				}
			});
		});
	}
});