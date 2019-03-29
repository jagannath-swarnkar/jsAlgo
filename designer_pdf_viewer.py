def designerPdfViewer(h, word):
    alp_dict = {}
    alp = 'abcdefghijklmnopqrstuvwxyz'
    for i in range(len(alp)):
        alp_dict[alp[i]]=i
    height = []
    for i in word:
        height.append(h[alp_dict[i]])

    return int(max(height))*len(word)

numbers = "6 3 4 4 6 4 5 3 4 3 6 5 4 6 7 1 3 4 2 5 6 1 5 1 7 2"
h = numbers.split(' ')
word = 'nrdyluacvr'
print(designerPdfViewer(h, word))