def calculate_mode(arg_list):
    # initialize your variables (UNIQUE_ITEMS, COUNT, RESULT)
    unique_items = list(set(arg_list))
    count = [] 
    result = []
    # find the count of each unique item in ARG_LIST and add it to COUNT
    for item in unique_items:
        count.append(arg_list.count(item))
    # add the most frequent items to RESULT
    for x in range(len(count)):
        if (count[x] == max(count)):
            result.append(unique_items[x])
    return result
